// Movie model import
const Movie = require("../models/movie");

// Get all movies
module.exports.getAllMovies = async function (req, res, next) {
    // For pagination
    const {perPage, offset} = req.query;

    // For sorting
    const {sortBy, order} = req.query;

    try {
        const movies = await Movie.getAllMovies(perPage, offset, sortBy, order);
        res.status(200).json(movies);
    } catch (e) {
        return next(e);
    }
};

// Get one movie
module.exports.getOneMovie = async function (req, res, next) {
    try {
        const movie = await Movie.getOneMovie(req.params.id);

        if(!movie.length)
            return next();
        else
            res.status(200).json(movie);

    } catch (e) {
        return next(e);
    }
};