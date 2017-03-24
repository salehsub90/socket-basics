var moment = require('moment');
var now = moment();

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

//console.log(now.format());

// now.subtract

// console.log(now.format('h:mmA'));