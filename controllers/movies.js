// Movie model import
const Movie = require("../models/movie");

// Get all movies
module.exports.getAllMovies = async function (req, res) {
    try {
        const movies = await Movie.getAllMovies();
        res.json(movies);
    } catch (e) {
        console.log(e);
    }
};

// Get one movie
module.exports.getOneMovie = async function (req, res) {
    try {
        const movie = await Movie.getOneMovie(req.params.id);
        console.log(movie);
        res.json(movie);
    } catch (e) {
        console.log(e);
    }
};