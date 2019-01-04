// Import requirements
var express = require('express');
var router = express.Router();

// Controller
const {getAllMovies, getOneMovie, createMovie} = require("../controllers/movies");

// Validation
const movieValidation = require("../validation/movie");

router.get('/', getAllMovies);
router.get('/:id', getOneMovie);


router.post('/', movieValidation, createMovie);

module.exports = router;