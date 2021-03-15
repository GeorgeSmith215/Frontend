const fs = require("fs");
fs.readFile("hello.js", (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})