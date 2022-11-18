const http = require('http');

const server = http.createServer(function (request, response)
{
    console.log( 'respuesta del cliente');
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write('Hello from server!');
    response.end();
});

server.listen(4000);