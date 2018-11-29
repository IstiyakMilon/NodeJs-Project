const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';




// const fs = require('fs');


// const requestHandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//         // Write allow us to write some date to the response
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message"  method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//         }
    
//         // Quiting/ to exit from the server
//         // process.exit();
    
//         if(url === '/message' && method === 'POST'){
//             const body = [];
//             // This is a utility method in node js where we use buffer to parse data chunk
    
//             // request on a data listener( sending data as chunk or small portion) 
//             //and a function declared inside the req to process some 
//             //operation on the data chunk it getting
//             req.on('data', (chunk) => {
//                 // Making some console to check the data chunk
//                 console.log(chunk);
//                 // Push the data chunk to the body array
//                 body.push();
//             });
//             // Request on end listener when its done parsing the incoming 
//             //request data or the incoming requests and define a function 
//             //which will buffer all the data chunk that stored on the body
//             req.on('end', () => {
//                 const parsedBody = Buffer.concat(body).toString();
    
//                 // Make some output of the parsed body
//                // console.log(parsedBody);
    
//                 const message = parsedBody.split('=')[1];
//                 fs.writeFile('message.txt', message, (err) => {
//                     res.statusCode = 302;
//                     res.writeHeader('Location', '/');
//                     return res.end();
//                 });
//             });
    
//         }
//         // Sending response ( Setting default header)
//         res.setHeader('Content-Type', 'text/html');
//         // Write allow us to write some date to the response
//         res.write('<html>');
//         res.write('<head><title>My First Page</title></head>');
//         res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//         res.write('</html>');
//         res.end();
//         // Can not write something after res.end()
// };

// // Single exports
// // module.exports = requestHandler;

// //multiple exports
// // module.exports = {
// //     handler: requestHandler,
// //     someText: 'SOme hard coded text'
// // }

// // Another way of exporting
// // module.exports.handler = requestHandler;
// // module.exports.someText = ' Some hard coded text';
// exports.handler = requestHandler;
// exports.someText = ' Some hard coded text';