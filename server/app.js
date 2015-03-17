var express = require('express');
var app = express();
var compression = require('compression');
var path = require('path');

// compress response
app.use(compression());

// server static files
// in production env those files could be server by nginx
app.use(express["static"](path.join(__dirname, "public")));

// require all routes app
require('./routes')(app)

// start server
app.listen(3000, function(){
    console.log('Server listen on port 3000');
});
