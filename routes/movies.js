// Import requirements
var express = require('express');
var router = express.Router();

// Controller
const {getAllMovies, getOneMovie, createMovie, deleteMovie, updateMovie} = require("../controllers/movies");

// Validation
const movieValidation = require("../validation/movie");

router.get('/', getAllMovies);
router.get('/:id', getOneMovie);
router.post('/', movieValidation, createMovie);
router.delete('/:id', deleteMovie);
router.put('/:id', movieValidation, updateMovie);

module.exports = router;