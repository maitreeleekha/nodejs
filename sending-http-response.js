const http = require('http');
const port = 3000;

http.createServer((request,response)=>{

    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.statusCode);
 
    var buff='';
    request.on('data',(chunk)=>{
    buff+=chunk;
    })
    //writes back the statuscode and response length
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Ending response. Data: '+buff);
 
    response.end('Toodles!!');
}).listen(port);

console.log('server running!');