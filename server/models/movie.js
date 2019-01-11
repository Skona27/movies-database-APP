// Moment
const moment = require("moment");
const CacheService = require("../services/cache");

// Caching time 60 sec
const ttl = 60 * 1;
const cache = new CacheService(ttl);

// Database import
const DB = require("./index");

module.exports.getAllMovies = async function (perPage = 10, offset = 0, sortBy = 'id', order = 'desc', search = null) {
   // perPage and offset validation is in controller!

    const sortable = ["id", "title", "year", "length", "rate"];

    let sortQuery = '',
        orderQuery = '',
        searchQuery = '';

    sortBy = sortBy.toLowerCase();

    if (sortable.includes(sortBy))
        sortQuery = `ORDER BY ${sortBy}`;

    order = order.toUpperCase();

    if (order === "ASC" || order === "DESC")
        orderQuery = `${order}`;

    if (search)
        searchQuery = `WHERE CONCAT (title, description, director) LIKE "%${search}%"`;

    const key = `getAllMovies_${searchQuery}_${sortQuery}_${orderQuery}_${perPage}_${offset}`;

    try {
        return await cache.get(key, () => (
            DB.query(`SELECT * FROM movies ${searchQuery} ${sortQuery} ${orderQuery} LIMIT ${perPage} OFFSET ${offset}`)
        ));

    } catch (err) {
        throw new Error("Error while selecting all movies.");
    }
};

module.exports.getMoviesCount = async function (search) {
    const key = `allMoviesCount_${search}`;

    // Search condition
    let searchQuery = '';
    if (search)
        searchQuery = `WHERE CONCAT (title, description, director) LIKE "%${search}%"`;

    try {
        let result = await cache.get(key, () => (
            DB.query(`SELECT count(*) as 'count' FROM movies ${searchQuery}`)
        ));

        // This comes as an array with one value
        return result[0].count;
    } catch (err) {
        throw new Error("Error while selecting all movies.");
    }
};

module.exports.getOneMovie = async function (id) {
    const key = `getMovie_${id}`;

    try {
        let movie = await cache.get(key, () => (
            DB.query("SELECT * FROM movies WHERE id = ?", [id])
        ));

        // This comes as an array of one result
        return movie[0];

    } catch (err) {
        throw new Error("Error while selecting one movie.");
    }
};

module.exports.createMovie = async function (movie) {
    const {title, description, genre, year, director, language, length, rate} = movie;

    try {
        let result = await DB.query("INSERT INTO movies (title, description, genre, year, director, language, length, rate) VALUES (?,?,?,?,?,?,?,?)",
            [title, description, genre, year, director, language, length, rate]);

        cache.flush();

        return result;
    } catch (err) {
        throw new Error("Error while creating a movie.");
    }
};

module.exports.deleteMovie = async function (id) {
    try {
       let result = await DB.query("DELETE FROM movies WHERE id = ?", [id]);
       cache.flush();

       // If deleted successfully, return true
       return result.affectedRows === 1;
    } catch (err) {
        throw new Error("Error while deleting a movie.");
    }
};

module.exports.updateMovie = async function (movie) {
    const {title, description, genre, year, director, language, length, rate, id} = movie;

    try {
        let result = await DB.query(`UPDATE movies SET title =?, description =?, genre=?, year =?, director =?, language =?, length =?, rate =?, modified_at =? WHERE id = ?`,
            [title, description, genre, year, director, language, length, rate, (moment().format()), id]);

        cache.flush();

        // If updated successfully, return true
        return result.affectedRows === 1;
    } catch (err) {
        throw new Error("Error while updating a movie.");
    }
};

module.exports.seedDB = async function () {
    cache.flush();
  const insertMoviesSQL = `INSERT INTO \`movies\` (\`title\`, \`description\`, \`genre\`, \`year\`, \`director\`, \`language\`, \`length\`, \`rate\`) VALUES
('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Crime', 1972, 'Francis Ford Coppola', 'English', 175, '9,2'),
( 'Pirates of the Caribbean: The Curse of the Black Pearl', 'Blacksmith Will Turner teams up with eccentric pirate \\"Captain\\" Jack Sparrow to save his love, the governor\\'s daughter, from Jack\\'s former pirate allies, who are now undead.', 'Adventure',2003, 'Gore Verbinski', 'English', 143, '8,0'),
( 'Inception', 'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.', 'Action', 2010, 'Christopher Nolan', 'English', 148, '8,8'),
( 'Casino', 'A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.', 'Crime',1995, 'Martin Scorsese ', 'English', 178, '8,2'),
('Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Drama',1997, 'James Cameron', 'English', 194, '7,8');`;

  try {
      await DB.query("DELETE FROM movies WHERE 1 = 1");
      await DB.query(insertMoviesSQL);
  } catch (err) {
      throw new Error("Error while seeding DB.");
  }
};