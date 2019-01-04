var { checkSchema } = require('express-validator/check');

const movieValidation= checkSchema({
    title: {
        isLength: {
            errorMessage: "Title is required.",
            options: {min: 1}
        }
    },
    description:{
        isLength: {
            errorMessage: "Description is required.",
            options: {min: 1}
        }
    },
    genre:{
        isLength: {
            errorMessage: "Genre is required.",
            options: {min: 1}
        }
    },
    year:{
        isLength: {
            errorMessage: "Year is required.",
            options: {min: 1}
        },
        isInt: {
            errorMessage: "Year must be an integer value."
        }
    },
    director:{
        isLength: {
            errorMessage: "Director is required.",
            options: {min: 1}
        }
    },
    language:{
        isLength: {
            errorMessage: "Language is required.",
            options: {min: 1}
        }
    },
    length:{
        isLength: {
            errorMessage: "Length is required.",
            options: {min: 1}
        },
        isInt: {
            errorMessage: "Length must be an integer value."
        }
    },
    rate:{
        isLength: {
            errorMessage: "Rate is required.",
            options: {min: 1}
        },
        isFloat: {
            errorMessage: "Rate must be a decimal from 1 to 10.",
            options: {min: 1.0, max: 10.0}
        }
    }
});

module.exports = movieValidation;