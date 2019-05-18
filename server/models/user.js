// Requirements
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Database import
const DB = require("./index");

module.exports.createUser = async function (user) {
    const {email, firstName, lastName, password} = user;

    try {
        const hash = await bcrypt.hash(password, 10);
        return await DB.query(`INSERT INTO users (email, hash, first_name, last_name) VALUES (?,?,?,?)`,
            [email, hash, firstName, lastName]);
    } catch (err) {
        throw new Error("Error while creating new user.");
    }
};

module.exports.findByEmail = async function (email) {
    try {
        let user = await DB.query(`SELECT * FROM users WHERE email = ?`, email);
        return user[0];
    } catch (err) {
        throw new Error("Error while selecting user by email.");
    }
};

module.exports.validatePassword = async function (password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    }
    catch(err) {
        throw new Error("Error while validating user password.");
    }
};

module.exports.validateAuthHeader = function (authHeader) {
    // We expect auth header to be passed!
    try {
        // Authorization: Bearer <TOKEN>
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (err) {
        // JWT verify throws an error, but we just want a boolean
        return false;
    }
};

module.exports.createToken = function (data) {
    return jwt.sign(data, process.env.JWT_SECRET);
};