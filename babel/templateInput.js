/*input Given As:<div onChange={onChangeFun}><h1></h1><p></p></div>*/

alert('Please Give Input As:<div onChange={onChangeFun}><h1></h1><p></p></div>');

document.getElementsByClassName("text-area")[0].addEventListener('change', function () {
    var templateStr = this.value;
    babelTransplier(templateStr);
});

function babelTransplier(inputStr) {
    var currentElement = 0;
    var parserObj = {};
    var parseStr = "";
    var outputStr = "";
    var createElementStr = "React.createElement";
    while (currentElement < inputStr.length) {

        switch (inputStr[currentElement]) {
            case "<":
                currentElement++;
                continue;
            case "/":
                currentElement++;
                continue;
            case " ":
                parserObj['parent'] = {node: parseStr};
                currentElement++;
                parseStr = "";
                continue;
            case "=":
                parserObj['parent']['props'] = {propName: parseStr};
                currentElement = currentElement + 2;
                parseStr = "";
                continue;
            case "}":
                parserObj['parent']['props']['propValue'] = parseStr;
                currentElement = currentElement + 2;
                parseStr = "";
                continue;
            case ">":
                if (parserObj.hasOwnProperty('parent')) {
                    if (!parserObj['children']) {
                        parserObj['children'] = []
                    }
                    parserObj['children'].push({node: parseStr});
                    currentElement++;
                    parseStr = "";
                    continue;
                }
            default:
                parseStr += inputStr[currentElement];
                currentElement++
        }

        if (parserObj.hasOwnProperty('parent')) {
            parseStr = parseStr.replace('/', "").trim();
            if (parserObj['parent']['node'] == parseStr) {
                parserObj['parent']['parentEndTextNode'] = true;
                currentElement++;
                continue;
            }
        }

        if (parserObj['children']) {
            parserObj['children'].forEach(function (child, index) {
                if (child.node == parseStr) {
                    child.childEndTextNode = true;
                    currentElement = currentElement + 2;
                    parseStr = "";
                    return;
                }
            })
        }
    }
    for (var key in parserObj) {
        if (key == 'parent') {
            outputStr += createElementStr + '(' + parserObj[key]['node'] + ',{' + parserObj[key]['props']['propName'] + ':' + parserObj[key]['props']['propValue'] + '},';
        }
        if (key == 'children') {
            parserObj[key].forEach(function (childVal) {
                outputStr += createElementStr + '(' + childVal.node + ',{}),'
            });
        }
    }
    outputStr = outputStr.replace(/,$/, ")");
    document.getElementById('root').innerHTML = outputStr;
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}


