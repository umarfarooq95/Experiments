/**
 * Created by Umar on 1/10/2018.
 */

var message = "hello"

{
    var message = "world"
}

console.log(this)
console.log(message)


var fs = []

for (let i = 0; i < 9; i++) {
    fs.push(function(){
        console.log(i)
    })
}

fs.forEach(function (f) {
    f()
})

let name="umar";
console.log(this);
console.log(name);
//let name="mani";

var arr = [1,2,3]
var arr1=[...arr]
console.log(arr1)

let fname = "jj"
let lname = "ji"
let aame = "jid"

var obj = {
    fname : fname,
    lname : lname,
}


let q = {
    fname,
    lname
}

var c = {q,aame}

console.log(q)


function  add(x=2,y=3) {
    var result= x+y
    console.log(result)
}

add(t=1)


const pr = document.querySelectorAll('.pro');

console.log(Array.from(pr))