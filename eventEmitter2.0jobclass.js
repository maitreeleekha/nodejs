const eventEmitter = require('events');

class job extends eventEmitter{
    constructor(message){
    super(message)
    this.on('start',function(){
       this.process(message);
    });
    }
    process(message){
    console.log(message);
    setTimeout(
        ()=>{this.emit('done',{completedOn :new Date})},5000);
}
}
module.exports= job;