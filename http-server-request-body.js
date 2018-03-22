const http = require('http');
const port= 3000;

http.createServer((request,respose)=>{

    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
    console.log(request.statusCode)

    if(request.method=='POST'){
       
        var c=0;
        var buff='';
        request.on('data', (chunk)=>{
            buff+=chunk;
            ++c;
        });

        request.on('end',()=>{

            try{
                var parsedDtata = JSON.parse(buff);
                console.log(parsedDtata);
            }
            catch(error){
                console.log('error occured while parsing!'+error);
            }
        });
    }

    else{

        respose.writeHead(200,()=>{{'contentType: text/plain'}});
        respose.on('end', ()=>{
            console.log('hello world');
        })
    }

}).listen(port);
console.log('server running!...');