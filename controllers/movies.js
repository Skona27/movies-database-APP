var { validationResult } = require('express-validator/check');

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
    } catch (err) {
        return next(err);
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

    } catch (err) {
        return next(err);
    }
};

// Create one movie
module.exports.createMovie = async function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ error: errors.array() });

    const {title, description, genre, year, director, language, length, rate} = req.body;
    let movie = {title, description, genre, year, director, language, length, rate};

    try {
        const result = await Movie.createMovie(movie);
        movie.id = result.insertId;

        res.location(`${req.headers.host}/movies/${movie.id}`).status(201).json(movie);

    } catch (err) {
        return next(err);
    }
};

// Delete one movie
module.exports.deleteMovie = async function (req, res, next) {
    try {
        // T | F
        const result = await Movie.deleteMovie(req.params.id);

        if(!result)
            next();
        else
            res.status(204).json();

    } catch (err) {
        return next(err);
    }
};

// Update one movie
module.exports.updateMovie = async function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ error: errors.array() });

    const {title, description, genre, year, director, language, length, rate} = req.body;
    let movie = {title, description, genre, year, director, language, length, rate};
    movie.id = req.params.id;

    try {
        const result = await Movie.updateMovie(movie);

        if(!result)
            next();
        else
            res.status(200).json(movie);

    } catch (err) {
        return next(err);
    }
};