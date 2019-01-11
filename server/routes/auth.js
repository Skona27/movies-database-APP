// Import requirements
var express = require('express');
var router = express.Router();

// Controller
const {login, register} = require("../controllers/auth");

// Validation
const userValidation = require("../validation/user");

router.post("/register", userValidation.register, register);
router.post("/login", userValidation.login, login);

module.exports = router;