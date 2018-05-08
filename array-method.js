//Array Constructor Properties
var fruitsName = ['Banana','Apple','Mango'];
//console.log(fruitsName.constructor);

//Array Concat Method---->	Joins two or more arrays, and returns a copy of the joined arrays
var hege = ['Email','Fb'];
var stale = ['Gmail','Yahoo'];
//console.log(hege.concat(stale));

//Array copyWithin Method--------->Copies array elements within the array, to and from specified positions
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
//console.log(fruits.copyWithin(2,0,1));

//Array Every Method--------->Checks if every element in an array pass a test
var ages = [12,13,45,32];
function checkAge(age) {
    return age < 12;
}
//console.log(ages.every(checkAge));

//Array Fill Method------------>Fill the elements in an array with a static value
var names = ['John','Dom','Watson'];
//console.log(names.fill('Sherlock',1));

//Array Filter Method---->Creates a new array with every element in an array that pass a test
var ageNumbers = [12,15,25];
function checkAdult(age) {
    return age < 15;
}
//console.log(ageNumbers.filter(checkAdult));

//Array Find Method------->Returns the value of the first element in an array that pass a test
//console.log(ageNumbers.find(checkAdult));

//Array Findindex Method------>Returns the index of the first element in an array that pass a test
//console.log(ageNumbers.findIndex(checkAdult));


var inputArr = [4,3,2,1];
function bubblesort2(arr){
    while(true){
        var swapped = false;
        for(var i =0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                var sec= arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = sec;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
}

console.log(bubblesort2(inputArr));


