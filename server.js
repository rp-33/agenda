let app = require('./app');
require('./configurations/db.js');
let server = require('http').createServer(app);
let ip = require('ip');

server.listen(app.get('port'), () => {
	console.log(ip.address()+':'+app.get('port'));
});