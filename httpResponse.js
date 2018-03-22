const http=require('http');
const port=3000;

http.createServer((req,res)=>{
    res.writeHead(404,{     
        'Content-Type':'text/plain'
    });
    res.statusCode=200;
    res.write='hello!';
    res.end(' world');
    }).listen(port);
    console.log(`Server running at http://localhost:${port}/`)