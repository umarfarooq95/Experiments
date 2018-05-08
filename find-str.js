/*
var sampleStr = "Sample Hello";

function FindIndexInStr(inputStr, stringToFind) {
    var foundIndex = null;
    var strToFindFirstEle = stringToFind[0];
    var k = 0;
    var foundWordChars = [];
    while (k < inputStr.length) {
        var startingPoint = inputStr[k];
        if (startingPoint == strToFindFirstEle) {
            foundIndex = k;
            let WHITESPACE = /\s/;
            var flag = true;
            while(flag){

            }
            if(!WHITESPACE.test(inputStr[k])) {
                foundWordChars.push(inputStr[k]);
            }
            k++
        }
        k++;
    }
    if(foundWordChars.join('').length  == stringToFind.length){
        return foundIndex;
    }
    else {
        return -1;
    }
}
console.log(FindIndexInStr(sampleStr, "Hello"));*/
/*
 function FindIndexInStr(inputStr, stringToFind) {
 var foundIndex = null;
 var strToFindFirstEle = stringToFind[0];
 var k = 0;
 var foundWordChars = [];
 while (k < inputStr.length) {
 var startingPoint = inputStr[k];
 if (startingPoint == strToFindFirstEle) {
 foundIndex = k;
 let WHITESPACE = /\s/;
 var flag = true;
 while(flag){

 }
 if(!WHITESPACE.test(inputStr[k])) {
 foundWordChars.push(inputStr[k]);
 }
 k++
 }
 k++;
 }
 if(foundWordChars.join('').length  == stringToFind.length){
 return foundIndex;
 }
 else {
 return -1;
 }
 }
 console.log(FindIndexInStr(sampleStr, "Hello"));*/

var sampleStr = "Sample Hello";

function findStringIndex(inputStr,strToFind) {
    var firstEleInStrToFind = strToFind[0];
    var foundCharsForInputStr = [];
    var foundIndex;
    var k = 0;
    while (k < inputStr.length){
        var startingPointInInputStr = inputStr[k];
        if(startingPointInInputStr == firstEleInStrToFind){
            foundIndex = inputStr.indexOf(startingPointInInputStr);
            for(var i = foundIndex;i<inputStr.length;i++){
                foundCharsForInputStr.push(inputStr[i]);
            }
            if(foundCharsForInputStr.length == strToFind.length){
                return foundIndex;
            }
            else {
                return -1;
            }
        }
        k++;
    }
}
//console.log(findStringIndex(sampleStr,"Hell"));

/*
 var sampleInputStr = "(add 2 (subtract 4 2))";

 function tokenizer(input) {
 var tokens = [];
 var current = 0;
 while(current < input.length){
 var char = input[current];
 if(char == "("){
 tokens.push({
 type: 'paren',
 value: '('
 });
 current ++;
 continue;
 }
 if(char == ")"){
 tokens.push({
 type: 'paren',
 value: ')'
 });
 current ++;
 continue;
 }
 var whitespace = /\s/;
 if(whitespace.test(char)){
 current++;
 continue;
 }
 var number = /[0-9]/;
 if(number.test(char)){
 var value = '';
 while (number.test(char)){
 value += char;
 char = input[++current];
 }
 tokens.push({type: 'number', value});
 continue;
 }
 if(char == '"'){
 var value = '';
 char = input[++current];
 while (char !== '"') {
 value += char;
 char = input[++current];
 }
 char = input[++current];
 tokens.push({ type: 'string', value });

 continue;
 }
 let LETTERS = /[a-z]/i;
 if (LETTERS.test(char)) {
 let value = '';
 while (LETTERS.test(char)) {
 value += char;
 char = input[++current];
 }
 tokens.push({ type: 'name', value });

 continue;
 }
 throw new TypeError('I dont know what this character is: ' + char);
 }
 return tokens;
 }
 console.log(tokenizer(sampleInputStr));*/

var number = [[12, 3, 4, 5], [3, 4, 2, 1], [5, 7, 8, 5], [5, 5, 2, 3]];
function diffOfDiagonalNo(inputArr) {
    var firstDiagonal = 0;
    var secondDiagonal = 0;
    var result;
    for (var a = 0; a < inputArr.length; a++) {
        firstDiagonal += inputArr[a][a];
        secondDiagonal += inputArr[a][inputArr[a].length - (a + 1)]
    }
    result = firstDiagonal - secondDiagonal;
    return result;
}
//console.log(diffOfDiagonalNo(number));

var dependencies = {
    "A": ["B", "C", "D"],
    "C": ["E", "F"],
    "F": ["G", "H"]
};

function FindDependenciesValue(Obj,Key) {
    var objValues = [];
    for(var key in Obj){
        if(key == Key){
            objValues.push(Obj[key]);
        }
    }
    return objValues;
}
//console.log(FindDependenciesValue(dependencies,"A"));

var num = [1, 2, 3, 4, 5, 6, 7];

/*console.log(num.filter(function (value) {
return value * 2;
}));*/
//console.log(num);

var Numbers = [1, 2, 101, 45, 55, 1443];
var l = Numbers.length;
var max = 999999;
var i;
for (i = 0; l > i; i++) {

    if (Numbers[i] < max) {

        max = Numbers[i];

    }

}

//console.log(max);
Array.prototype.myPush = function() {
    this[this.length] = arguments;
    return this.length
};


Numbers.myPush(6,9);
console.log(Numbers)

function s() {
    return 1,2
}
console.log(s())

var list =[{
    name : 'q',
    id : 1
},{
    name : 'w',
    id : 2
},{
    name : 'e',
    id : 3
},{
    name : 'r',
    id : 4
},{
    name : 't',
    id : 5
}];
var funs = [diffOfDiagonalNo,FindDependenciesValue];
console.log(list);
console.log(funs.toString());

var counter = {
    val: 0,
    increment: function () {
        this.val += 4;
    }
};
var a = {
    val: 0,
    increment: function () {
        this.val += 5;
    }
};
counter['increment'].call(a);
console.log(a.val);

var q = {
    val : 10,
    func : function () {
        eval('5==2')
    }
};
console.log(q.func())