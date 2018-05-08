/**
 * Created by Umar on 12/14/2017.
 */

var Arr = [4, 3, 1,2];

function PermCheck(inputArr) {

    inputArr.sort(function(a, b){return a - b});

    var result = null;

    inputArr.forEach(function (data,index) {

        if(data == index+1){
            result = 1
        }
        else{
            result = 0
        }

    });
    return result
}
console.log(PermCheck(Arr));