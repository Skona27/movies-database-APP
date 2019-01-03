// Database import
const DB = require("./index");

module.exports.getAllMovies = async function () {
    try {
        return await DB.query("SELECT * FROM movies");
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