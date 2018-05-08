var numbers = [2, 7, 14, 21, 8, 15];
/*
 function maxDistance(arr) {
 var outputArr = [];
 for (var j = 0; j < arr.length; j++) {
 var firstNumber = arr[j];
 var secondNumber = arr[j+1];
 var subtract = firstNumber - secondNumber;
 var absolute;

 if(subtract < 0){
 if(j==0){
 absolute = Math.abs(subtract);
 }
 else{
 var secondAbs = Math.abs(subtract);
 if(absolute < secondAbs){
 outputArr.push(secondAbs);
 }
 }
 }
 else{
 outputArr.push(subtract);
 }
 if(secondNumber === undefined){
 outputArr.pop();
 }
 }
 /!*   function removeDuplicates(outputArr) {
 var removeDuplicateNumbers = [];
 for (var i = 0;i<outputArr.length;i++){
 if(outputArr[i] == outputArr[i+1]){
 removeDuplicateNumbers.push(outputArr[i+1])
 }
 }
 return removeDuplicateNumbers;
 }
 var output = removeDuplicates(outputArr);
 return output;*!/

 return outputArr;
 }
 console.log(maxDistance(numbers));

 */

function maxDistance(arr) {
    var subtractValues = [];
    for (var k = 0; k < arr.length-1; k++) {
        var firstNumber = arr[k];
        var secondNumber = arr[k + 1];
        var subtract = firstNumber - secondNumber;
        if (subtract < 0) {
            var absolute = Math.abs(subtract);
            subtractValues.push(absolute);
        }
        else {
            subtractValues.push(subtract);
        }
    }
    function maxIndex(subValues) {
        var max = 0;
        for(var i = 0;i<subValues.length;i++){
                if(subValues[i]>max){
                    max = subValues[i]
                }
        }
        var maxNoIndex = subValues.indexOf(max);
        return maxNoIndex;

    }
    var result = maxIndex(subtractValues);
    return result;
}
console.log(maxDistance(numbers));



/*
 function A() {
 this.Aprop = "a";
 }

 function B() {
 this.bProp = "b";
 }
 B.prototype = new A();

 var b = new B();
console.log(b.__proto__.Aprop);
 var keys = ['asf','qwe'];
 var propertyName;
 for(var propertyName in b){
 keys.push(b)
 }
 console.log(keys);

function Person() {
   this.sample =  function () {
        return "hi"
    }
}
var john = new Person();
console.log(john);*/
/*
var arr = ['5',"2",'3'];
var i = 0;
while (i<arr.length){
    console.log(arr[i]);
    i++;
}
for(var k =0;k<=1000;k++){
    console.log(arr[k]);
}*/
var language = 2;
if (language == "2") {
    console.log("Great! Let's talk JavaScript!");
    var speaksJavaScript = true;
} else {
    console.log("I don't know what you're saying.");
}
if (speaksJavaScript) {
    console.log("It's great to meet you.");
}
var deliveryPrice;
var orderPrice = 11;
var deliveryCity = "Anytown";
if ((deliveryCity == "Anytown") && (orderPrice > 10)) {
    deliveryPrice = 0;
} else {
     deliveryPrice = 5;
}
console.log(deliveryPrice);

