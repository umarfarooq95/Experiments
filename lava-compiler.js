var fs = require('fs');
fs.readFile('mg-model.js', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var splits = data.split('\n');
    var jsLines = [];
    for (var i = 0; i < splits.length; i++) {
        var jsLine = parseAndGenerateJsLine(splits[i]);
        jsLines.push(jsLine)
    }
    var js = jsLines.join('\n');
    function parseAndGenerateJsLine(line) {
        var jsLineStr = "";
        var pattern = new RegExp('par');
        var printPattern = new RegExp('^print');
        var funPattern = new RegExp('fun');
        if (pattern.test(line)) {
            var newLine = line.replace('par', 'var');
            jsLineStr += newLine;
            return jsLineStr;
        }
        if (printPattern.test(line)) {
            var testReg = /\([\s\S]*\)/g;
            var match = line.match(testReg);
            var argumentMatch = match[0].substr(1, match[0].length - 2);
            var printReplace = 'console.log(' + argumentMatch + ')';
            jsLineStr += printReplace;
            return jsLineStr;
        }
        if (funPattern.test(line)) {
            var reg = /fun\s+([^\(]*)\s*\(([^\)]*)\)\s*\{([\s\S]*)\}/g;
            var matches = reg.exec(line);
            var funName = matches[1];
            var funPara = matches[2];
            var funBody = matches[3];
            var funReplace = 'function '+ funName + '(' + funPara + ')' + '{' + parseAndGenerateJsLine(funBody) + '}';
            jsLineStr += funReplace;
            return jsLineStr;
        }
        jsLineStr += line;
        return jsLineStr;
    }
    fs.writeFile('first.js', js, function (err) {
        if (err) return console.log(err);
    });
});
