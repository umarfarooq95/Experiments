var a = 10;
console.log(a)

function sample(a) {
    console.log(a)
}

sample(30);

let objA = {a: 1, b: 2};
let b = Object.assign(objA, {b: 3, c: 4});
console.log(objA);
console.log(b);

let ab = {val: 10};
let bc = ab;
let cd = {val: 10};

console.log(ab == cd);
ab.val = 15;
console.log(bc);


function repeat(n, action) {
    for (var k = 0; k < n; k++) {
        action(k)
    }
}

var label = [];
repeat(3, i => {
    label.push(`unit ${i + 1}`)
});

console.log(label);

function splitThingsIntoThree(arr, startFrom, resultObj) {
    let i = startFrom,
        endTo = startFrom + 3,
        itemArr = [];
    if (arr.length < startFrom) {
        return resultObj;
    }
    resultObj[startFrom] = itemArr;
    for (i; i < endTo; i++) {
        if (!arr[i]) {
            itemArr.push(0);
        }
        else {
            itemArr.push(arr[i]);
        }
    }
    return splitThingsIntoThree(arr, endTo, resultObj);
}

console.log(splitThingsIntoThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,14], 0, {}));
