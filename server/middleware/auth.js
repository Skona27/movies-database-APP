// Requirements
require("dotenv").config();

// Model
const User = require("../models/user");

module.exports.isAuthenticated = function(req, res, next) {
        const authHeader = req.headers.authorization;

        if(!authHeader)
            return next({ status: 401, message: "You must be logged in." });

        const valid = User.validateAuthHeader(authHeader);

        if(!valid)
            return next({ status: 401, message: "Bad authentication token." });

        return next();
};