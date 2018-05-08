/**
 * Created by Umar on 1/10/2018.
 */

const arr = [2, 3];

const squares = arr.map(x  => x * x);

console.log(squares)

const f = x => (x % 2) === 0 ? x : 0;

console.log(f(2))

const f2 = (x => (x % 2)) === 0 ? x : 0;


const f3 = (function (x) {
    return (x % 2) === 0 ? x : 0;
})



console.log(f3(2))
console.log(f2)


var obj = {
    name : "John",
    getName:function (){
        console.log(this.name)
    }
}

obj.getName()


var x = function () {

    this.val = 1;
    console.log(this)

    var that = this;

    setTimeout(() => {
        this.val++;
        console.log(this.val)
    },1000)
}

var xx = new x();
