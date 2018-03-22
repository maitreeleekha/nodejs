var Job = require('./eventemitterModularJob.js');

var job = new Job();

job.on('done', function(details){
 console.log('Job pronounced done at' + details.completedOn);
}
);


job.emit('start');

/*var Job = require('./eventemitterModularJob.js')
var job = new Job()

job.on('done', function(details){
  console.log('Weekly email job was completed at',
    details.completedOn)
})

job.emit('start')*/