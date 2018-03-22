const eventEmitter=require('events');
class job extends eventEmitter{};
var job1=new job;
job1.on('done',function(time){
    console.log('job done @ '+time);
});

job1.emit('done',new Date());