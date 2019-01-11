var { checkSchema } = require('express-validator/check');

const User = require("../models/user");

module.exports.login = checkSchema({
    email: {
        isEmail: {
            errorMessage: "Email is incorrect."
        }
    },
    password:{
        isLength: {
            errorMessage: "Password is required.",
            options: {min: 1}
        }
    }
});

module.exports.register = checkSchema({
    email: {
        isEmail: {
            errorMessage: "Email is incorrect."
        },
        custom: {
            options: async (value) => {
                let user = await User.findByEmail(value);
                // If no user, we get undefined
                return !user;
            },
            errorMessage: "Email is already in use."
        }
    },
    password:{
        isLength: {
            errorMessage: "Password must be at least 8 characters long.",
            options: {min: 8}
        }
    },
    firstName: {
        isLength: {
            errorMessage: "First name is required.",
            options: {min: 1}
        },
    },
    lastName: {
        isLength: {
            errorMessage: "Last name is required.",
            options: {min: 1}
        },
    }
});
