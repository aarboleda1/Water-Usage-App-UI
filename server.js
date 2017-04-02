var express = require('express');
var app = express();
var path = require('path');
// Define the port to run on
app.set('port', 3000);

app.use(express.static('./client'));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Point your browser to port ' + port + ', enjoy!!!');
});