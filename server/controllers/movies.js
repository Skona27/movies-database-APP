var { validationResult } = require('express-validator/check');

// Model
const Movie = require("../models/movie");
const User = require("../models/user");

// Get all movies
module.exports.getAllMovies = async function (req, res, next) {
    // For pagination
    var {perPage, offset} = req.query;
    perPage = parseInt(perPage);
    offset = parseInt(offset);

    // We need this in order to send links with response
    if(Number.isNaN(perPage))
        perPage = 10;

    if(Number.isNaN(offset))
        offset = 0;

    // For sorting and searching
    const {sortBy, order, search} = req.query;

    try {
        let movies = {};

        movies.totalCount = await Movie.getMoviesCount(search);
        movies.perPage = perPage;
        movies.pageNumber = (perPage+offset)/perPage;
        movies.data = await Movie.getAllMovies(perPage, offset, sortBy, order, search);

        const authHeader = req.headers.authorization;

        movies.data.forEach(movie => {
           movie.links = [
               {rel: "self", method: "GET", href: `http://${req.headers.host}/api/movies/${movie.id}`}
           ];

           if (authHeader) {
               if(!User.validateAuthHeader(authHeader))
                   return next({ status: 401, message: "Bad authentication token." });

               movie.links.push(
                    {rel: "update", method: "PUT", href: `http://${req.headers.host}/api/movies/${movie.id}`},
                    {rel: "delete", method: "DELETE", href: `http://${req.headers.host}/api/movies/${movie.id}`}
                );
           }
        });

        // Links
        let links = [];

        if(offset > 0)
            links.push({rel: "prev", method: "GET", href: `http://${req.headers.host}/api/movies?perPage=${perPage}&offset=${offset-perPage}`});

        if(movies.totalCount > offset+perPage)
            links.push({rel: "next", method: "GET", href: `http://${req.headers.host}/api/movies?perPage=${perPage}&offset=${offset+perPage}`});

        if(authHeader) {
            if(!User.validateAuthHeader(authHeader))
                return next({ status: 401, message: "Bad authentication token." });

            links.push({rel: "create", method: "POST", href: `http://${req.headers.host}/api/movies`});
        }

        res.status(200).json({...movies, links});

    } catch (err) {
        return next(err);
    }
};

// Get one movie
module.exports.getOneMovie = async function (req, res, next) {
    try {
        let movie = {};
        movie.data = await Movie.getOneMovie(req.params.id);

        if(!movie.data)
            return next();

        let links = [];
        const authHeader = req.headers.authorization;

        if(authHeader) {
            if(!User.validateAuthHeader(authHeader))
                return next({ status: 401, message: "Bad authentication token." });

            links = [
                {rel: "update", method: "PUT", href: `http://${req.headers.host}/api/movies/${req.params.id}`},
                {rel: "delete", method: "DELETE", href: `http://${req.headers.host}/api/movies/${req.params.id}`},
            ];
        }

        res.status(200).json({...movie, links});

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

        let links = [
            {rel: "self", method: "GET", href: `http://${req.headers.host}/api/movies/${movie.id}`},
            {rel: "update", method: "PUT", href: `http://${req.headers.host}/api/movies/${movie.id}`},
            {rel: "delete", method: "DELETE", href: `http://${req.headers.host}/api/movies/${movie.id}`}
        ];

        res.location(`${req.headers.host}/movies/${movie.id}`).status(201).json({data: movie, links});

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

        let links = [
            {rel: "self", method: "GET", href: `http://${req.headers.host}/api/movies/${movie.id}`},
            {rel: "update", method: "PUT", href: `http://${req.headers.host}/api/movies/${movie.id}`},
            {rel: "delete", method: "DELETE", href: `http://${req.headers.host}/api/movies/${movie.id}`}
        ];

        if(!result)
            return next();

        res.status(200).json({data: movie, links});

    } catch (err) {
        return next(err);
    }
};