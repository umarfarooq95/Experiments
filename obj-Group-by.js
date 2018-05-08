var inputArray = [
    {id: 1, firstName: 'John', lastName: 'Watson', sex: 'Male',salary:10000},
    {id: 2, firstName: 'Joe', lastName: 'Watson', sex: 'Male',salary:10000},
    {id: 3, firstName: 'Seetha', lastName: 'Lakshmi', sex: 'Female',salary:10000},
    {id: 4, firstName: 'Doe', lastName: 'Son', sex: 'Male',salary:10000},
    {id: 5, firstName: 'Mia', lastName: 'Watson', sex: 'Female',salary:10000},
    {id: 6, firstName: 'Letty', lastName: 'John', sex: 'Female',salary:10000},
    {id: 7, firstName: 'Gisele', lastName: 'Jary', sex: 'Female',salary:10000},
    {id: 8, firstName: 'Sheela', lastName: 'Watson', sex: 'Female',salary:10000},
    {id: 9, firstName: 'Dom', lastName: 'Toretto', sex: 'Male',salary:10000},
    {id: 10, firstName: 'Paul', lastName: 'Walker', sex: 'Male',salary:10000}
];

function findKeyByValueMethod(arr, key, value) {
    var outputArrays = [];
    var outputObj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == value) {
            outputArrays.push(arr[i]);
            outputObj[arr[i][key]] = outputArrays;
        }
    }
    return outputObj;
}
//console.log(findKeyByValueMethod(inputArray,'sex','Male'));

function groupBy(arr, key) {
    var outputObj = {};
    for (var i = 0; i < arr.length; i++) {
        var iterationObj = arr[i];
        var value = iterationObj[key];
        var keyValueArrays = outputObj[value];
        if (keyValueArrays) {
            keyValueArrays.push(iterationObj);
        }
        else {
            outputObj[value] = [iterationObj];
        }
    }
    return outputObj;
}

console.log(groupBy(inputArray,'sex'));

function groupByInLengthNumber(arr, key) {
    var outputObj = {};
    for (var i = 0; i < arr.length; i++) {
        var iterationObj = arr[i];
        var value = iterationObj[key];
        var objKeyValue = outputObj[value];
        if (objKeyValue) {
            outputObj[value] = ++objKeyValue;
        }
        else {
            var count = 0;
            outputObj[value] = ++count;
        }
    }
    return outputObj;
}

//console.log(groupByInLengthNumber(inputArray,'sex'));

function groupByInArrayOfKeys(arr, arrayOfKeys) {
    var finalArrays = [];
    for (var i = 0; i < arr.length; i++) {
        var iterateObj = arr[i];
        var outputObj = {};
        for (var j = 0; j < arrayOfKeys.length; j++) {
            var iterateKey = arrayOfKeys[j];
            outputObj[iterateKey] = iterateObj[iterateKey];
        }
        finalArrays.push(outputObj);
    }
    return finalArrays;
}
//console.log(groupByInArrayOfKeys(inputArray,['firstName','lastName']));

function groupByExcluded(arr, arrayOfKeys) {
    var finalArrays = [];
    for (var i = 0; i < arr.length; i++) {
        var iterateObj = arr[i];
        var outputObj = {};
        for (var j = 0; j < arrayOfKeys.length; j++) {
            var iterateKey = arrayOfKeys[j];
            var isDeleteProp = delete iterateObj[iterateKey];
            if (isDeleteProp) {
                outputObj = iterateObj;
            }

        }
        finalArrays.push(outputObj);
    }
    return finalArrays;
}
//console.log(groupByExcluded(inputArray,['sex','id']));


function groupByExcludedWithIndexofMethod(arr, arrayOfKeys) {
    var finalArrays = [];
    for (var i = 0; i < arr.length; i++) {
        var iterateObj = arr[i];
        var outputObj = {};
        for (var k in iterateObj) {
            var isTrue = (arrayOfKeys.indexOf(k) == -1);
            if (isTrue) {
                outputObj[k] = iterateObj[k];
            }
        }
        finalArrays.push(outputObj)
    }
    return finalArrays;
}
//console.log(groupByExcludedWithIndexofMethod(inputArray,['sex','id']));

function fnsquare(number) {
    return  Math.pow(number, 2)
}
function fnadd(number) {
    return number + 2;
}
function fre(number) {
    return number * 2
}
var numbers = [fnsquare, fnadd, fre].reverse();
var f = numbers.reduce(function(f1, f2) {
    return function (number) {
        var f2fun = f2(number);
        var f1fun = f1(f2fun);
         return f1fun;
        //f1(f2(number))
    }
});
//console.log(f);
//console.log(f(3));


Array.prototype.myreduce = function (callback, init) {
    var i = init ? 0 : 1;
    var prev = init ? init : this[0];
    var curr = null;
    var res = null;
    while (i < this.length) {
        curr = this[i];
        res = callback(prev, curr);
        prev = res;
        i++;
    }
    return res;
};
//console.log(numbers.myreduce(getSum));

function shuffle(input) {
    for(var i = input.length-1 ;i>=0;i--){
        var random = Math.floor(Math.random()*(i+1));
        var randomAtIndex = input[random];

        input[random] = input[i];
        input[i] = randomAtIndex;
    }
    return input
}
var tempArr = [1,2,3,4,5,6,7,8];
//console.log(shuffle(tempArr));

var boolObj = new Boolean(false);
//console.log(boolObj);
function boll() {
    if(!boolObj){
        console.log("Hello")
    }
    else{
        console.log("world")
    }
}
//boll();

function  callback(fn) {
    var w = fn();
    //console.log(w());
}
var q = callback(function () {
    var a ="john";
    return (function () {
        a = "watson";
        return a;
    })
});
q = "Name";
//console.log(q);

var names = ['Tony','James','Alice','Watson'];
function quotatious(names) {
    var quotes = [];
    for(var i = 0; i< names.length; i++){
       function theFn () {
           var index = i;
            return 'My Name is' + " " + names[index];
        }
        quotes.push(theFn())
    }
    return quotes;
}
//console.log(quotatious(names));

String.prototype.repeatify = function (times) {
    var str = "";
    for(var i =0; i<times;i++){
        str += this;
    }
    return str;
};
//console.log("Hello".repeatify(2));

var myarr = ['it','aint','my'];
//console.log(myarr.length);
var w = myarr.toLocaleString();
//console.log(w.length);

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

var myArr = [2,3,5,6,7];
var result = myArr.remove(1,2);
//console.log(result);
//console.log(myArr);


var btnChange = document.querySelector('#change');
var img = document.querySelector('.img');

btnChange.addEventListener('click',function () {
    img.setAttribute('src','./Website/images/Responsive-Web-Design.png');
});
