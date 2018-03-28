const async = require('async');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const n = process.argv[2]; //no. of parallel queries.
const limit = 1000;
const url = "mongodb://localhost:27017/edx-course-db";
const customers = require('./m3-customer-data.json');
const customerAdd = require('./m3-customer-address-data.json');


var tasks = [];


MongoClient.connect(url, (error, db) => {
    if (error) return process.exit(1);

    //make tasks:
    customers.forEach((element, index, list) => {
        customers[index] = Object.assign(customers, customerAdd[index]);

        if (index % n == 0) {
            var start = index;
            var end = (parseInt(start)+ parseInt(n) > limit) ? customers.length - 1 : parseInt(start)+ parseInt(n);
            tasks.push((done) => {
                console.log('Processing ' + start + '-' + end + ' out of' + customers.length);
                db.collection('customers').insert(customers.slice(start,end-start), (error, result) => {
                    done(error, result)
                })
            })
        }
    });
    //launch:
    console.log('Launching ' + 1000 / n + ' parallel tasks.');
    var startTime =  Date.now();
    async.parallel(tasks, (error, result) => {
    console.log(error);
    })
    var endTime =  Date.now();
    console.log('Execution time: ' + (endTime - startTime));   
    db.close();
    //const endTime = Date.now();
})
