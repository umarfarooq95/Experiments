/**
 * Created by Umar on 1/2/2018.
 */

/*
 _.zip(['a', 'b'], [1, 2], [true, false]);
 // => [['a', 1, true], ['b', 2, false]]
 [[0[0],1[0],2[0]],[[0[1],1[1],2[1]]]
 * */
//console.log(zip1(['a', 'b', 'c', "A"], [1, 2, 4], [true, false]))


function zip2() {

    var resultArr = [];
    var convertedArr = convertIntoVertical(arguments);
    console.log(convertedArr);
    var max = -Infinity;
    var index = -1;
    convertedArr.forEach(function(a, i){
        if (a.length>max) {
            max = a.length;
            index = i;
        }
    });
    for (var k = 0; k < max; k++) {
        var arr = [];
        for (var c = 0; c < convertedArr.length; c++) {

            arr.push(convertedArr[c][k])
        }
        resultArr.push(arr)
    }
    return resultArr;

}

function convertIntoVertical(argumentsArr) {
    var result = [];
    for (var j = 0; j < argumentsArr.length; j++) {
        var currentEle = argumentsArr[j];
        result[j] = [];
        for (var i = 0; i < currentEle.length; i++) {
            result[j].push(currentEle[i]);
        }
    }
    return result

}

//console.log(zip2([3, 4], [1, 2, 8], [5, 6]))

//[[0[0],1[0],2[0]],[0[1],1[1],2[1]],[],[]]

function myZip() {
    var zippedItemList = [];
    for (var i = 0; i < arguments.length; i++) {
        var zipItems = [];
        for (var j = 0; j < arguments.length; j++) {
            zipItems.push(arguments[j][i])
        }
        zippedItemList.push(zipItems);
    }
    return zippedItemList;
}

console.log(zip2([3, 4], [1, 2, 8,7,8],[1,2]))