const http = require('http');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid'); //for generating random values.

const downloadPage = (url='http://nodeprogram.com')=>{

//fetchPage makes the get request to the page.

const fetchPage =(urlf,callback)=>{
    http.get(url, (response)=>{
        
            var buff='';
            response.on('data', (chunk)=>{
                buff+=chunk.toString();
            });
        
            response.on('end', ()=>{
                callback(null, buff);
            });
        }).on('error', (error)=>{
            console.log('Got error: '+error);
            callback(error,null);
        });
}



const foldername = uuid(); //returns a random foldername
fs.mkdirSync(foldername); //creates a folder synchronously

//now call the fetchPage function with url as the input and it returns the html of the page after the get request is completed

fetchPage(url, (error,data)=>{
    if(error){console.log('Got Errorrr:'+error);}
    fs.writeFileSync(path.join(__dirname,foldername,'url.txt'),url);
    fs.writeFileSync(path.join(__dirname, foldername, 'file.html'), data);
    console.log('downloading is done in folder ', foldername);
});

}

downloadPage(process.argv[2]);