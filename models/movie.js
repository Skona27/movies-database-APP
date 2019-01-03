// Database import
const DB = require("./index");

module.exports.getAllMovies = async function (perPage = 10, offset = 0, sortBy = 'id', order = 'desc') {
    const sortable = ["id", "title", "year", "length", "rate"];

    let sortQuery = '',
        orderQuery = '';

    sortBy = sortBy.toLowerCase();

    if (sortable.includes(sortBy))
        sortQuery = `ORDER BY ${sortBy}`;

    order = order.toUpperCase();

    if (order === "ASC" || order === "DESC")
        orderQuery = `${order}`;

    try {
        console.log(`SELECT * FROM movies ${sortQuery} ${orderQuery} LIMIT ${perPage} OFFSET ${offset}`);
        return await DB.query(`SELECT * FROM movies WHERE language='Polish' ${sortQuery} ${orderQuery} LIMIT ${perPage} OFFSET ${offset}`);
    } catch (err) {
        throw new Error("Error while selecting all movies.");
    }
};

module.exports.getOneMovie = async function (id) {
    try {
        return await DB.query("SELECT * FROM movies WHERE id = ?", [id]);
    } catch (err) {
        throw new Error("Error while selecting one movie.");
    }
};