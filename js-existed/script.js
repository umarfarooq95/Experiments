/**
 * Created by Umar on 1/18/2018.
 */

// break should use in blocks
loop1:
    for (let i = 0; i < 3; i++) {
        loop2:
            for (let j = 0; j < 3; j++) {
                if (i == 1) {
                    continue loop1;
                }
                console.log(`i= ${i}, j = ${j}`)
            }
    }


foo:if (true) {
    console.log('a');
    break foo;
    console.log('this log will not be executed');
}




void function () {
    console.log("aaa")
    return "h";
}()

function myfun() {
    let x = 0;
    return (x += 1, x);
}


y = false, true;


var z = (false, true);

console.log(myfun())
console.log(y)
console.log(z)


const type = 'man';

const isMale = type === 'man' ? ( console.log('Hi Man!'), true) : (console.log('Hi Lady!'), false);


console.log(`isMale is "${isMale}"`);

const date = new Date();

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const formatter2 = new Intl.DateTimeFormat('en-us', options);
console.log(formatter2.format(date)); // Current Date


const square = x => {
    return x * x
};

const increment = (n) => {
    return n + 1
};

// without pipeline operator
console.log(square(increment(square(2)))); // 25

//2 |> square |> increment |> square


function log(text, textTwo) {
    console.log(text, textTwo);
}

setTimeout(log, 1000, 'Hello World!', 'And Mars!');


/*var person = document.querySelector('#person');

console.log(person.dataset);*/


console.log([]+[])
console.log([]+{})
console.log({}+{})
console.log({}+[])