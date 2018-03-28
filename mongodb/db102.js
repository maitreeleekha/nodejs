
//method insertDocuments, which uses insert, is created. The insert() method is similar to the insert() 
//command in the Mongo shell except for one big difference— in Node it is asynchronous 
//which means we use a callback with the error-first signature.
const insertDocument = (db,callback)=>{
    
        //get reference to the db collection, say edx-course-docs collection.
        const collection = db.collection('edx-course-students');
        //Insert four documents in it by invoking the insert() funcion.
        //it has an async callback of the error first signature.
    
        collection.insert([
            {name:'Maitree'},{name:'Shreshth'},{name:'Suman'},{name:'Sonia'} //array of four objects (documents)
        ], (error,result)=>{
            //if error occurs then exit.
            if(error) return process.exit(1);
            console.log(result.result.n);//4
            console.log(result.ops.length);//4
    
            //invoke the callback defined.
            callback(result);
        })
    };
    
    var updateDocument= (db,callback)=>{
    
        var collection = db.collection('edx-courses-students');
    // Update document where a is 2, set b equal to 1.
     
        const name = 'Suman';
        collection.update({name : name},{$set:{grade:'A'}},(error,result)=>{
            if(error) return process.exit(1);
            console.log(result.result.n);//1
            console.log('updated document where name is '+name);
            callback(result);
        })
    };
    
    const removeDocument=(db,callback)=>{
        const collection = db.collection('edx-courses-students');
    
        var name = 'Maitree';
        collection.remove({name:name},(error,result)=>{
            if(error) return process.exit(1);
    
            console.log(result.result.n);//1
            console.log('removed documnet where name is '+name);
            callback(result);
        })
    };
    
    var findDocument = (db,callback)=>{
    
        var collection = db.collection('edx-courses-students');
    
        //find some documents
        collection.find({}).toArray((error,docs)=>{
    
            if(error)  return process.exit(1);
            console.log(docs.length);
            console.log('found the foll docs: ');
            console.dir(docs);
            callback(docs);
        })
    };
    
    
    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient;
    
    // Connection URL
    const url = 'mongodb://localhost:27017/edx-course-db';
    // Use connect method to connect to the Server
    MongoClient.connect(url,(error,db)=>{
        if(error)return process.exit(1);
        insertDocument(db,()=>{
            updateDocument(db,()=>{
                removeDocument(db,()=>{
                    findDocument(db,()=>{
                        db.close();
                    })
                })
            })
        })
    })
    
    