
var express = require('express'); // Express for routing
var path = require('path');
var app = express();
var http = require('http').Server(app); // http server

var bodyParser = require("body-parser"); // Body parser for fetch posted data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data
 
app.use('/', require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));
 
// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//set default port and ip address
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var server = app.listen(port, ipaddress, function() {
    console.log('Express server listening on port ' + server.address().port);
});



