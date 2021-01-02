const http = require('http');   //내장모듈

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello 44sunghun.lee');
    response.end();
}).listen(3000);    // port 3000