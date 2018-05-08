var oddArr = [9, 3, 9, 3, 9, 7, 9];

/*
 arr[0] == arr[2] == arr[4] == arr[6] = 9
 arr[1] == arr[3] == 3
 returns the value of the unpaired Element
 */


function oddOccuranceInArr(inputArr) {
    var first = inputArr[0];
    var second = inputArr[1],result;
    for (var k = 0; k < inputArr.length; k++) {
        if(inputArr[k] != first && inputArr[k] != second){
            result = inputArr[k]
        }
    }
    return result
}
console.log(oddOccuranceInArr(oddArr));

