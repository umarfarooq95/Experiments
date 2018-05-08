/**
 * Created by Umar on 12/14/2017.
 */

var A = [3, 1, 2, 4, 3];

/*Output
 * P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 return minimal Number (1)
 * */

function TapeEquilibrium(A) {
    var left = 0;
    var right = 0;
    var result = [];
    if (!A.length) {
        return 0;
    }
    if (A.length == 1) {
        return A[0];
    }

    for (var i = 1; i < A.length; i++) {
        right += A[i]
    }
    calculateDifference(A, left, result, right)
    result = Math.min.apply(null, result);
    return result
}

function calculateDifference(A, left, result, right) {
    var rightTotal = right;
    for (var k = 0; k < A.length - 1; k++) {
        if(k == 0){
            left = A[0];
            rightTotal = right;
        }else{
            left += A[k];
            rightTotal = rightTotal - A[k];
        }

        result.push(Math.abs(left - rightTotal));
    }
}
console.log(TapeEquilibrium(A));