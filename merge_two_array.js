var arr = [1, 2, 3, 1]
var arr2 = [1, 2, 3, 4];


function mergeTwoArr(inputArr1, inputArr2) {

    var resultArr = [];

    for (var q = 0; q < inputArr1.length; q++) {
        if (resultArr.indexOf(inputArr1[q]) == -1) {
            resultArr.push(inputArr1[q])
        }
        for (var a = 0; a < inputArr2.length; a++) {
            if (resultArr.indexOf(inputArr2[a]) == -1) {
                resultArr.push(inputArr2[a])
            }
        }
    }
    return resultArr
}

console.log(mergeTwoArr(arr, arr2));