var express = require('express');
var app = express();

var compression = require('compression');
var path = require('path');

app.use(compression());
app.use(express["static"](path.join(__dirname, "public")));

app.get('/hello', function(req, res){
  res.send('hello world');
});

app.listen(3000, function(){
    console.log('Server listen on port 3000');
});
