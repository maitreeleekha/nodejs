/*const http=require('https');
const url="https://nodejs.org/api/events.html";
http.get(url,(response)=>{
    var c=0;
    var rawData='';
    response.on('data',(chunk)=>{
        c++;
       rawData+=chunk.toString();
    });
    response.on('end',()=>{
        console.log(rawData);
        console.log('response ended with '+c+'chunks loaded');
    });
}).on('error',(error)=>{
console.log('error occured!: '+error);
})*/


/*const http = require('https');
const url = "https://nodejs.org/api/events.html";
http.get(url, (response)=>{

    var c=0;
    var rawdata ='';

    response.on('data', (chunk)=>{
     c++;
     rawdata+=chunk.toString();
    });

    response.on('end', () => {
        try {
          const parsedData = JSON.parse(rawdata)
          console.log(parsedData)
        } catch (e) {
          console.error(e.message)
        }
      });

    response.on('error', (error)=>{
        console.log('sec errors: '+error); //404 errors, page not found and other response errors etc
    })
    }).on('error', (error)=>{
        console.log('error occured: '+error); //for url errors etc.
    })
*/
const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { 
    rawData += chunk 
  })
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})

