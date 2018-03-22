const http = require('http');
const port=3000;
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    //200 means status OK
    res.end('Hello World\n');
}).listen(port);
console.log('server is running @ http://localhost:'+port+'/');