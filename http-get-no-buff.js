/*const http=require('https');
const url="https://nodejs.org/api/events.html";
http.get(url,(response)=>{
    var c=0;
    response.on('data',(chunk)=>{
        c++;
        console.log(chunk.toString());
    });
    response.on('end',()=>{
        console.log('response ended with '+c+'chunks loaded');
    });
}).on('error',(error)=>{
console.log('error occured!: '+error);
})*/

const http = require('https');
const url = 'https://nodejs.org/api/events.html';

http.get(url, (response)=>{

var c=0;
response.on('data', (chunk)=>{
    c++;
    console.log(chunk.toString());
});

response.on('end',()=>{console.log('total responses: '+c)});

}).on('error',(error)=>{
    console.log('error occured :'+error);
})
