function binaryGap(num) {
    var binaryNumLists = [];
    var parseStr = "";
    var output = [];
    var result = "";

    var binaryNum = dec2bin(num);
    for (var i = 0; i < binaryNum.length; i++) {
        if(i == 0){
            parseStr+=binaryNum[i];
            continue;
        }
        parseStr+=binaryNum[i];
        if(binaryNum[i] == '1'){
            binaryNumLists.push(parseStr);
            parseStr = parseStr.substr(parseStr.length-1);
            continue;
        }
    }
    binaryNumLists.forEach(function(str,index){
       str.replace(/^1(\d+)1$/g,function(all,cap){
           output.push(cap.length)
       })
    });

    if(output.length==1){
        return result = output[0]
    }
    if(!output.length){
        return 0
    }
    output.reduce(function (acc,currentValue,index) {
       if(acc<currentValue){
           acc = currentValue;
           return acc
       }
        else{
           result = acc
       }
    },0);
    return result
}
console.log(binaryGap(1041));

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}