// Requirements
const jwt = require("jsonwebtoken");
var { validationResult } = require('express-validator/check');

// Movie model import
const User = require("../models/user");

// Login user
module.exports.login = async function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ error: errors.array() });

    const {email, password} = req.body;

    try {
        const {id, first_name, hash} = await User.findByEmail(email);

        const isMatch = await User.validatePassword(password, hash);

        if (isMatch) {
            const token = jwt.sign({id, first_name}, 'SECRET');
            res.status(200).json({id, first_name, token});
        } else {
            next({status: 400, message: "Invalid Password."});
        }

    } catch (err) {
        return next({status: 400, message: "User does not exist."});
    }
};

// Register user
module.exports.register = async function (req, res, next) {
    try {
        await User.createUser();
    } catch (err) {
        return next(err);
    }
};