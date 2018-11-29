const http = require('http');

const routes = require('./routes');

// First way request listener
// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// 2nd way using function (callback function) as parameter
// http.createServer(function(req, res) {

// });

console.log(routes.someText);

// 3rd way using arrow function (callback)
const server = http.createServer(routes.handler);

server.listen(3000); // 3000 is local server port