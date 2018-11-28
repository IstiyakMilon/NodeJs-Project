const http = require('http');
// File declaration
const fs = require('fs');
// First way request listener
// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// 2nd way using function (callback function) as parameter
// http.createServer(function(req, res) {

// });

// 3rd way using arrow function (callback)
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);

    const url = req.url;
    // parse a method
    const method = req.method;
    if(url === '/') {
    // Write allow us to write some date to the response
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message"  method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }

    // Quiting/ to exit from the server
    // process.exit();

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
    }
    // Sending response ( Setting default header)
    res.setHeader('Content-Type', 'text/html');
    // Write allow us to write some date to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
    // Can not write something after res.end()
});

server.listen(3000); // 3000 is local server port