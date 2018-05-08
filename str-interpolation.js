var contextObj = {
    person: {
        name: "Paul Walker",
        age: 35,
        address: {
            city: function (){
                return "USA"
            }
        }
    }
};

var inputStr = "My Name is {person.name} of age {person.age}.I live at {person.address.city()}";

function interpolate(context/*Obj*/, inputStr) {
    var outputStr = "";
    var reg = /{[\s\S]*?}/g;
    outputStr = inputStr.replace(reg, function (match) {
        var interpolateStr = match;
        var removedCurlyStr = interpolateStr.substring(1, interpolateStr.length - 1);
        var splits = removedCurlyStr.split(".");
        var str;
        var testReg = /\(\)/g;
        var innerC = context;
        for(var i = 0 ; i < splits.length ; i++){
            if(testReg.test(splits[i])){
              var removedFnCall = splits[i].slice(0,splits[i].length-2);
              var fnResult = innerC[removedFnCall];
              return fnResult();
            }
            innerC = innerC[splits[i]];

        }
        return innerC;
    });
    return outputStr;
}
console.log(interpolate(contextObj, inputStr));