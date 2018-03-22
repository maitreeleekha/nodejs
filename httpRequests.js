const http=require('http');
const port=3000;

http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    if (request.method == 'POST') {
        let buff = ''
        request.on('data', function (chunk) {
          buff += chunk  
        })
        request.on('end', function () {
          console.log(`Body: ${buff}`)
          response.end('\nAccepted body\n\n')
        })
      } else {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('Hello World\n')
      } 
}).listen(port);