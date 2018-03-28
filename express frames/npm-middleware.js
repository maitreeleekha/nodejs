const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


//use npm middleware
app.use(bodyParser.json());
//morgan used for logging details
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/transaction', (req,res)=>{
    res.send(req.body);
    console.log(req.body);
});

app.listen(3000);