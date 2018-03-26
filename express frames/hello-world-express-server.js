//import
const express = require('express');

 //instantiating express.
const app = express();

//routing
//define the routes in the ''.
//'/' is the home route.
app.get('/',(req,res)=>{

    //optional configs and middlewares can be added. (using app.set('key','value'))

    //the main code is like server sending a response to client when the req has ended.
    res.send('hello world'); // res.end() can also be used but it is a weaker statement than res.send() as res.send() automatically adds some useful headers such as eTag , content type, contenet length etc. 
    console.log('done!');
});

//handle errors

//boot the server.
app.listen(3000);