// Moment
const moment = require("moment");
const CacheService = require("../services/cache");

// Caching time 60 sec
const ttl = 60 * 1;
const cache = new CacheService(ttl);

// Database import
const DB = require("./index");

module.exports.getAllMovies = async function (perPage = 10, offset = 0, sortBy = 'id', order = 'desc') {
   // perPage and offset validation is in controller!

    const sortable = ["id", "title", "year", "length", "rate"];

    let sortQuery = '',
        orderQuery = '';

    sortBy = sortBy.toLowerCase();

    if (sortable.includes(sortBy))
        sortQuery = `ORDER BY ${sortBy}`;

    order = order.toUpperCase();

    if (order === "ASC" || order === "DESC")
        orderQuery = `${order}`;

    const key = `getAllMovies_${sortQuery}_${orderQuery}_${perPage}_${offset}`;

    try {
        return await cache.get(key, () => (
            DB.query(`SELECT * FROM movies ${sortQuery} ${orderQuery} LIMIT ${perPage} OFFSET ${offset}`)
        ));

    } catch (err) {
        throw new Error("Error while selecting all movies.");
    }
};

module.exports.getMoviesCount = async function () {
    const key = `allMoviesCount`;

    try {
        let result = await cache.get(key, () => (
            DB.query(`SELECT count(*) as 'count' FROM movies`)
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