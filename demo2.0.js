var job=require('./eventEmitter2.0jobclass.js');
var job1=new job("hello there!!");
job1.on('done',()=>{
    console.log('job pronounced done @',new Date);
});

job1.emit('start');