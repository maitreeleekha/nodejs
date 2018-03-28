/* VALIDATING IN THE CRUD REST API 2.0 */


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));

//now the profile variable is an array of objects since it is very rare that a single object is being operated upon.
var profile=[{
"fname":"Maitree", 
"lname":"Leekha",
}];

/*IMPORTANT*/
/*app.get('/hi/:param1', function(req,res){} );
and given this URL  http://www.google.com/hi/there?qs1=you&qs2=tube
You will have:

req.query

{
  qs1: 'you',
  qs2: 'tube'
}
req.params

{
  param1: 'there'
}*/

//using query string for get (no as such rule; can use any)
app.get('/profile',(req,res)=>{

    if(req.query.id){
        res.send(profile[req.query.id]);
    }
    else{
        res.send(profile);
    }
})

//before pushing check for the incoming data.
app.post('/profile',(req,res)=>{
   if(!req.body.fname.trim() || !req.body.lname.trim()){
        return res.sendStatus(404);
    }
   
    //filtering the incoming data to only what is required and removing the junk data.
    let shortPro={
        fname: req.body.fname,
        lname:req.body.lname
    }

    profile.push(shortPro);
    console.log(profile);
    res.sendStatus(201);
})

//using params for put
app.put('/profile/:id',(req,res)=>{

    profile[req.params.id]=req.body;
    console.log('updated: ',profile[req.params.id]);
    res.sendStatus(202);
})

app.delete('/profile/:id',(req,res)=>{
    profile.splice(req.params.id,1);
    console.log('deleted',profile);
    res.sendStatus(203);
})

app.listen(3000);