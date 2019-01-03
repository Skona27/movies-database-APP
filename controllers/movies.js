// Movie model import
const Movie = require("../models/movie");

// Get all movies
module.exports.getAllMovies = async function (req, res, next) {
    try {
        const movies = await Movie.getAllMovies();
        res.status(200).json(movies);
    } catch (e) {
        return next(e);
    }
};

// Get one movie
module.exports.getOneMovie = async function (req, res) {
    try {
        const movie = await Movie.getOneMovie(req.params.id);
        res.status(200).json(movie);
    } catch (e) {
        return next(e);
    }
};