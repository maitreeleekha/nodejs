const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

var final;
var arr=[];
csv()
.fromFile(path.join(__dirname,'customer-data.csv'))
.on('json',(jsonObj)=>{
    //jsontext=JSON.stringify(jsonObj);
    //final+=jsontext;
    arr.push(jsonObj);
}).on('end', ()=>{
    var final = JSON.stringify(arr,null,4);
    fs.writeFileSync(path.join(__dirname,'customer-data.json'),final);
   console.log('done!');
}).on('error', (error)=>{
    console.log('errorr occured', error);
});