// Import requirements
var express = require('express');
var router = express.Router();

// Controller
const {getAllMovies, getOneMovie} = require("../controllers/movies");

router.get('/', getAllMovies);
router.get('/:id', getOneMovie);

module.exports = router;