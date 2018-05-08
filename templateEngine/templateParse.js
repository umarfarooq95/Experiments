function TemplateParse() {

}

TemplateParse.parse = function (inputStr) {
    var parsedBlocks = [];
    var tokens = inputStr.split(/\s/);
    var currentTokenIndex = 0;
    while (currentTokenIndex < tokens.length) {
        var tokenStr = tokens[currentTokenIndex];
        var block = TokenTypeFactory.createTokenType(tokenStr);
        parsedBlocks.push(block);
        currentTokenIndex = block.parse(currentTokenIndex, tokens);
    }
    return parsedBlocks
}

var parsedBlocks = TemplateParse.parse(templateInputStr);

var tmpOutput = new TemplateOutput();

parsedBlocks.forEach(function (data) {
    data.process(templateContext, tmpOutput)
})




document.getElementById("root").innerHTML = tmpOutput.output;