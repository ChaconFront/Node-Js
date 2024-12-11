/* const http = require('node:http');

http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end("hello word\n");
  })
  .listen(3030, '127.0.0.10');

console.log('Server Running at http://127.0.0.1:3030');
 */

const http = require('node:http');

function webServer(req, res) {
  res
    .writeHead(200, { 'Content-type': 'text/html' })
    .end('<h1>Hola desde node js</h1>');
}
http.createServer(webServer).listen(3000, 'localhost');

console.log('Server Running at http://localhost:3000');
