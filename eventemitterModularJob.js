const Emitter = require('events');

class Job extends Emitter{
    constructor(){
        super();
        this.on('start', ()=>{
            this.process();
        });
    }
    process(){
     setTimeout( 
         ()=>{
             this.emit('done',{completedOn: new Date()});
         },5000
     );
    }
};

module.exports = Job;

/*const EventEmitter = require('events')
class Job extends EventEmitter {
  constructor(ops) {
    super(ops)
    this.on('start', ()=>{
      this.process()
    })
  }
  process() {
     setTimeout(()=>{
      // Emulate the delay of the job - async!
      this.emit('done', { completedOn: new Date() })
    }, 700)
  }
}

module.exports = Job*/