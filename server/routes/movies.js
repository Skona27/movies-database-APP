// Import requirements
var express = require('express');
var router = express.Router();

// Controller
const {getAllMovies, getOneMovie, createMovie, deleteMovie, updateMovie} = require("../controllers/movies");

// Auth middleware
const {isAuthenticated} = require("../middleware/auth");

// Validation
const movieValidation = require("../validation/movie");

router.get('/', getAllMovies);
router.get('/:id', getOneMovie);
router.post('/', isAuthenticated, movieValidation, createMovie);
router.delete('/:id', isAuthenticated, deleteMovie);
router.put('/:id', isAuthenticated, movieValidation, updateMovie);

module.exports = router;