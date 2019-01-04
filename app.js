var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

const moviesRoutes = require("./routes/movies");

var app = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/movies", moviesRoutes);


// Invalid request 404
app.use((req, res, next) => {
    let err = new Error("Resource not found.");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        error: {
            msg: err.message || "Oops! Something went wrong."
        }
    });
});

module.exports = app;
