var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/api/videos', require('./api/videos'));
    // ...
    // list of all routes here
    // ...
};
