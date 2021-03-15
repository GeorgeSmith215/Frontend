const calculate = require('./calculate')
let resAdd = calculate.add(1,2);
console.log("1+2="+resAdd);

let resSub = calculate.sub(2,1);
console.log("2-1="+resSub);

let resMul = calculate.mul(2,1);
console.log("2*1="+resMul);

let resDiv = calculate.div(2,1);
console.log("2/1="+resDiv);