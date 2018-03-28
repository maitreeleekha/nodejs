const mongodb = require('mongodb');
//create a client object:

const MongoClient = mongodb.MongoClient;

//invoke connect() using a database URI which is a string 
//that has the location and could have the username and password too.

// Connection URI
const url="mongodb://localhost:27017/edx-course-db";

// Use connect method to connect to the Server
MongoClient.connect(url,(err,db)=>{
    if(err)return process.exit(1);

    console.log('kudos! connected to server successfully!!');

    //perform queries

    //close db
    db.close();
})