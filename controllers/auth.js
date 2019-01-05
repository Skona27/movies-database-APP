// Requirements
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
        // Just for keeping convention
        const firstName = first_name;

        const isMatch = await User.validatePassword(password, hash);

        if (isMatch) {
            const token = User.createToken({id, firstName});

            res.status(200).json({id, firstName, token});
        } else {
            next({status: 400, message: "Invalid Password."});
        }

    } catch (err) {
        return next({status: 400, message: "User does not exist."});
    }
};

// Register user
module.exports.register = async function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ error: errors.array() });

    const {email, firstName, lastName, password} = req.body;

    try {
        let result = await User.createUser({email, firstName, lastName, password});
        const id = result.insertId;

        const token = User.createToken({id, firstName});
        res.status(201).json({id, firstName, token});

    } catch (err) {
        return next(err);
    }
};