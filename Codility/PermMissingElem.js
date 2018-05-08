var A = [1, 2];

/*Output ---> 4*/
function PermMissingElem(A) {
    var result = null;

    if(!A.length){
        return 1
    }
    var min = Math.min.apply(null, A);
    var max = Math.max.apply(null, A);

    if(A[0] == 1){
        max = 2
    }

    if(min == max){
        min = max-1
    }

    for (var k = min; k <= max; k++) {
        if (A.indexOf(k) == -1) {
            result = k;
        }
    }
    return result
}
console.log(PermMissingElem(A));
