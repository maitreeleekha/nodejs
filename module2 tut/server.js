const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorhandler());

var store={};
store.accounts=[];

app.get('/accounts',(req,res)=>{
    res.status(200).send(store.accounts);
})

app.post('/accounts',(req,res)=>{
    let newacc = req.body;
    let id = store.accounts.length;
    store.accounts.push(newacc);
    res.status(201).send({id:id});
});

app.put('/accounts/:id',(req,res)=>{
  store.accounts[req.params.id]=req.body;
  res.status(202).send(store.accounts[req.params.id]);
})

app.delete('/accounts/:id',(req,res)=>{
    store.accounts.splice(req.params.id,1);
    res.status(203).send();
})

app.listen(3000);
