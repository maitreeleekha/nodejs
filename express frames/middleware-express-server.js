const express = require('express');
const app = express();//instantiate

//defining middlewares- uses 3 args; method is app.use()
//a middleware is always executed irrespective of the route or the method requested.
//thus it can be used to define the portion of response that  is common to all(or many).
app.use((req,res,next)=>{
    
    console.log('method: ', req.method);
    console.log('url: ',req.url );

    //always call next();
    next();
});

//can define multiple middlewares.
//will be executed in a top to bottom order.
//the middleware will transfer control to the next section only when 'next()' is defined else it will stop.
app.use((req,res,next)=>{
    if(req.query.api_key){
        next(); //only with something like: /transactions?api_key=12345
    }
    else{
        res.status(401).send('not authorized!');
    }
    
    
});

/*
middleware as a function that can be reuesed later:
const middleware = (req,res,next)=>{
    //do something
    //next();
}

use as following:
app.use(middleware);
*/




//defining routes
app.get('/',(req,res)=>{
    res.send('hello world!');
});

app.get('/transactions',(req,res)=>{
    res.send('hello transactions!');
});

//inline middleware.
app.get('/accounts',(req,res,next)=>{
    //inline defined.
    /*if(req.query.accno){
        next();
    }
    res.status(500).send('account number not defined!');*/

    console.log('inline middware!');
    //if(we use next with an error object, it will not go to the next section; it will short circuit and jump to the error hanler section.)
    next(new Error('AAUUCHHC'));
},
(req,res)=>{
    res.send('hello accounts!');

});

//error handler takes 4 args
app.use((error,req,res,next)=>{
    res.status(404).send('ooppsss! error occured message:'+error);
});


//booting
app.listen(3000);