var { checkSchema } = require('express-validator/check');

const userLoginValidation= checkSchema({
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

module.exports.login = userLoginValidation;