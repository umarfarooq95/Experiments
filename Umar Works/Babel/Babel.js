/**
 * Created by Provility on 29-Dec-17.
 */



var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6,...arr1
]
;
var arr3 = [7, 8, 9];


function sample(one, two, three) {
    console.log(one, two, three)
}

//sample(...arr1)


[a,b,...rest] = [1,2,3,4,5]

console.log(a);
console.log(b);
console.log(rest);


({ e, d } = { e: {q:10}, d: 20 });
console.log(e); // 10
console.log(d); // 20


//console.log(arr2)


var obj1 = {
    key: 1,
    value: 1
};

var obj2 = {
    "Name": "Obj2"
};


var {Name} = obj2


var obj3 = {...obj1,Name};

//console.log(obj3)


var arr6 = [1, 2, 3];
var arr8 = [...arr6]; // like arr.slice()
arr8.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

console.log(arr6)
console.log(arr8)