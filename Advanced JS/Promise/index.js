// const Promise = require('./Promise');

let p = Promise((resolve,reject)=>{
    resolve(100);
    // reject('failed');
}).then(data=>{
    console.log('data:'+data);
},reason=>{
    console.log('reson:'+reason);
})