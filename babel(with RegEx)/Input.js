document.getElementsByClassName("text-area")[0].addEventListener('change', function () {
    var templateStr = this.value;
    babelComplier(templateStr);
});


function babelComplier(templateStr) {
    var children = [];
    var parserObj = {};
    var outputStr = "";
    var createElementStr = "React.createElement";
    templateStr.replace(/[(<\w.>)(<\/\w.>)]+/g,function (all,cap) {
        children.push(all);
    });
    children.splice(0,1)
    children.splice(children.length-1,1);

    var findParentStr = templateStr.replace(/(^<([\w]+)\>)((\s+?<((\w.)>\<\/(\w.))>)+)(\s<\/([\w])+)\>/g,function(all,captured){
        return all
    });

    var parentSplits = findParentStr.split(' ');
    parserObj['parent'] = {}
    parserObj['parent']['parentStart'] = parentSplits[0]
    parserObj['parent']['parentEnd'] = parentSplits[parentSplits.length-1]
    parserObj['parent']['parentStart'] = parserObj['parent']['parentStart'].replace(/<([\w]+)>/,function(allPart,capturedPart){
        return capturedPart
    });

    parserObj['parent']['parentEnd'] = parserObj['parent']['parentEnd'].replace(/<\/([\w]+)>/,function(allPart,capturedPart){
        return capturedPart;
    });

    if(parserObj.parent.parentStart == parserObj.parent.parentEnd){
        parserObj['parent']['isParentStrSame'] = true
    }
    else{
        parserObj['parent']['isParentStrSame'] = false
    }
    parserObj['children'] = []

    children.forEach(function (childData,index) {
        var childObj = {};
        childObj['child'+index+'Start'] = childData.replace(/<([\w]+)><\/([\w]+)>$/g,function (all,captured) {
            return captured
        })
        childObj['child'+index+'End'] = childData.replace(/^<([\w]+)><\/([\w]+)>$/g,function (all,captured) {
            return captured
        })

        if(childObj['child'+index+'Start'] == childObj['child'+index+'End']){
            childObj['isSameStr']= true
        }
        else{
            childObj['isSameStr']= false
        }
        parserObj['children'].push(childObj)
    });

    for (var key in parserObj) {
        if (key == 'parent') {
            outputStr += createElementStr + '(' + parserObj[key]['parentStart'] + ',{},';
        }
        if (key == 'children') {
            parserObj[key].forEach(function (childVal,index) {
                outputStr += createElementStr + '(' + childVal['child'+index+'Start'] + ',{}),'
            });
        }
    }
    outputStr = outputStr.replace(/,$/, ")");
    document.getElementById('root').innerHTML = outputStr;

}



