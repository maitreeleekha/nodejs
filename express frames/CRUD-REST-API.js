const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

//here we are updating in this profile variable itself 
//but ideally we will be making these changes to a database instance.
var profile={
    'name':'Maitree Leekha',
    'age':'20',
    'email':'maitreeleekha@yahoo.in'
};

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));

//reading
app.get('/profile',(req,res)=>{
       res.send(profile);
});

//creating
app.post('/profile',(req,res)=>{
    profile = req.body;
    console.log('created profile', profile);
    res.sendStatus(202);
});

//updating
app.put('/profile',(req,res)=>{
Object.assign(profile,req.body); //used for partial replace as well instead of using app.patch()
console.log('updated',profile);
res.sendStatus(203)
})

//deleting
app.delete('/profile',(req,res)=>{
    profile={};
    console.log('deleted',profile);
    res.sendStatus(204);
})

app.listen(3000);