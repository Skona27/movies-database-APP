// Moment
const moment = require("moment");
const CacheService = require("../services/cache");

// Caching time
const ttl = 60 * 1;
const cache = new CacheService(ttl);

// Database import
const DB = require("./index");

module.exports.getAllMovies = async function (perPage = 10, offset = 0, sortBy = 'id', order = 'desc') {
    if(Number.isNaN(parseInt(perPage)))
        perPage = 10;

    if(Number.isNaN(parseInt(offset)))
        offset = 0;

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

module.exports.getOneMovie = async function (id) {
    const key = `getMovie_${id}`;

    try {
        return await cache.get(key, () => (
            DB.query("SELECT * FROM movies WHERE id = ?", [id])
        ));

    } catch (err) {
        throw new Error("Error while selecting one movie.");
    }
};

module.exports.createMovie = async function (movie) {
    const {title, description, genre, year, director, language, length, rate} = movie;

    try {
        return await DB.query("INSERT INTO movies (title, description, genre, year, director, language, length, rate) VALUES (?,?,?,?,?,?,?,?)",
            [title, description, genre, year, director, language, length, rate]);
    } catch (err) {
        throw new Error("Error while creating a movie.");
    }
};

module.exports.deleteMovie = async function (id) {
    try {
       let result = await DB.query("DELETE FROM movies WHERE id = ?", [id]);
        cache.del(`getMovie_${id}`);

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

        cache.del(`getMovie_${id}`);

        // If updated successfully, return true
        return result.affectedRows === 1;
    } catch (err) {
        throw new Error("Error while updating a movie.");
    }
};