const http = require('http');
// First way
function rqListener(req, res) {

}

// http.createServer(rqListener);

// 2nd way using function (callback function) as parameter
// http.createServer(function(req, res) {

// });

// 3rd way using arrow function (callback)
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

server.listen(3000); // 3000 is local server port