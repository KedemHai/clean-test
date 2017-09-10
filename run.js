var express = require('express');
var path = require('path');
var app = express();

var port = 5555;

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static('./'));

var server = app.listen(port, function () {
	var port = server.address().port;
	
	console.log('MyCheck task running at http://localhost:%s', port);
});
