var connect = require('connect');

connect.createServer(
	connect.static("../simple-angular-app")

).listen(5000); 
