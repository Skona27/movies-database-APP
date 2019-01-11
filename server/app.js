var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var cors = require("cors");

const moviesRoutes = require("./routes/movies");
const authRoutes = require("./routes/auth");

var app = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(cors());
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api/movies", moviesRoutes);
app.use("/api", authRoutes);

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
