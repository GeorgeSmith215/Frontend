function f1(){
    console.log(this)
}

function f2(){
'use strict'
    console.log(this)
}

f1()

f2()