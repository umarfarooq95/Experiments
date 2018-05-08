var A = [3, 8, 9, 7, 6];
/*
 output:
 [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

 */

function cyclic_rotation(inputArr, k) {
    for (var a = 0; a < k; a++) {
       var value= inputArr.pop()
        inputArr.unshift(value)
    }
    return inputArr
}

console.log(cyclic_rotation(A, 3))






