// Find Smallest Number In Array
var numbers = [2, 58, 1,105, 65, 3,89];

function findSmallestNumber(numbers) {
    var number =10000;
    for (var i = 0; i < numbers.length; i++) {
        if(number > numbers[i]){
            number = numbers[i];
        }
    }
    return number;
}
//console.log(findSmallestNumber(numbers));


// Function Should return Ascending Order Array
var arrayOfNumbers = [3,2,5,4,1,6];

function sortNumbersInAscending(numbersArray) {
    for(var i=0;i<numbersArray.length;i++){
        for(var j= 0 ;j<numbersArray.length;j++)
        if(numbersArray[j]>numbersArray[j+1]){
            var secondNumber = numbersArray[j+1];
            numbersArray[j+1] = numbersArray[j];
            numbersArray[j] = secondNumber;
        }
    }
    return numbersArray;
}
console.log(sortNumbersInAscending(arrayOfNumbers));


//Object Destructing
var str = "flower plant animal thing/n" +
          "rose beans cat pen/n" +
          "3 1 3 4/n" +
          "2 4 5 6";
function strToObject (str){
    var splits = null;
    var inputHash = {};
    var lines = str.split("/n");
    //console.log(lines);
    for (var i=0;i<lines.length;i++){
        splits = lines[i].split(" ");
        inputHash[i] = splits;
    }
    //console.log(inputHash);
    var finalObj = {};

   finalObj[inputHash[0][0] + "-" + inputHash[1][0]] = inputHash[2][0] * inputHash[3][0];
   finalObj[inputHash[0][1] + "-" + inputHash[1][1]] = inputHash[2][1] * inputHash[3][1];
   finalObj[inputHash[0][2] + "-" + inputHash[1][2]] = inputHash[2][2] * inputHash[3][2];
   finalObj[inputHash[0][3] + "-" + inputHash[1][3]] = inputHash[2][3] * inputHash[3][3];
   console.log(finalObj);

}
//console.log(strToObject(str));

//Find the Even Numbers in Array
var arrayNumbers = [12,34,6,9,3,5,8,2,45,44,42];

function getEvenNumber(numbers) {
    return !(numbers % 2)
}
//console.log(arrayNumbers.filter(getEvenNumber));

//Array Every Method Implemented
var arr = [12,6,8]

function Every(array,fn) {
    for(var i=0;i<array.length;i++){
       var result = fn(array[i]);
        if(result==false){
            return false;
        }
    }
    return true;
}
var everyResult = Every(arr,function (a) {
      if(a % 2 == 0){

        return true;
    }
    return false;
});

//console.log(everyResult);

//Array Some Method Implementation

var arr1 = [89,12,77];

function some(arr,fn) {
    for(var i= 0;i<arr.length;i++){
         var result1 = fn(arr[i]);
        if(result1 == true){
            return true;
        }
    }
    return false;
}
var someResult = some(arr1,function (num) {
    if(num % 2 == 0){
        return true;
    }
    return false;
});
console.log(someResult);

//Array Filter Method Implementation
var filterArrNumbers = [12,34,45,67];
function Filter(arr,fn) {
    var filteredArray= [];
    for(var i = 0;i<arr.length;i++){
        var callbackResult = fn(arr[i]);
        if((callbackResult == true)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
var filterResult = Filter(filterArrNumbers,function (number) {
    return !(number % 2);    
});
//console.log(filterResult);

