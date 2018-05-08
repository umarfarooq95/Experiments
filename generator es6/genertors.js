/**
 * Created by Umar on 12/27/2017.
 */

function *createGenerator(i){
    yield i+1;
    yield i+2;
    yield i+3;
}


var gen = createGenerator(10)

console.log(gen.next())
console.log("hi")
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


function *fooo (x){
    var y = 2*(yield(x+1))
    var z = yield(y/3);
    return (x+y+z);
}

var a = fooo(5)


console.log(a.next());
console.log(a.next(12));
console.log(a.next(13));