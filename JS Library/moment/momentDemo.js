var moment = require('moment');

var datetimeCurrentMonthDay21 = moment().date(21)

console.log(datetimeCurrentMonthDay21)

console.log(datetimeCurrentMonthDay21.add(-1,'months').format('YYYY-MM-DD'))