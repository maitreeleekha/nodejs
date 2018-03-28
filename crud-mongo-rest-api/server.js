const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
//const routes = require('./routes.js');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const url = 'mongodb://localhost:27017/edx-course-db';

MongoClient.connect(url, (error,db)=>{
    if(error) process.exit(1);

app.get('/accounts',(req,res)=>{
    const collection = db.collection('accounts');
    collection.find({}, { sort: { _id: -1 } })
        .toArray((error, result) => {
            if (error) return next(error);
            res.send(result);
        })
});

app.post('/accounts',(req,res)=>{
    let newAccount = req.body;
    const collection = db.collection('accounts');
    collection.insert(newAccount, (error, result) => {
        if (error) return next(error);
        res.send(result);
    });
});

app.put('/accounts/:id',(req,res)=>{
    let upAccount = req.body;
    const collection = db.collection('accounts');
    collection.update({ _id: mongodb.ObjectID(req.params.id) },
        { $set: req.body },
        (error, result) => {
            if (error) return next(error);
            res.send(result);
        })
});

app.delete('/accounts/:id',(req,res)=>{
    const collection = db.collection('accounts');
    collection.remove({ _id: mongodb.ObjectID(req.params.id) },(error,result)=>{
        if (error) return next(error);
        res.send(result);
    })
});


    app.use(errorHandler());
    app.listen(3000);
});



