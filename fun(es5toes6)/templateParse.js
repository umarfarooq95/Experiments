function TemplateParse() {

}

TemplateParse.parse = function (inputStr) {
    var parsedBlocks = [];
    var blocks = [];
    var currentTokenIndex = 0;
    var tokenList = [],tokenStr;
    while (currentTokenIndex < inputStr.length) {
        tokenList = [],tokenStr = "",blocks = [];
        for(var i = currentTokenIndex;i<inputStr.length;i++){
            if(TokenTypeFactory.isFunctionEndUptoName(inputStr[i]) ||
               TokenTypeFactory.isArgumentEnd(inputStr[i]) ||
                TokenTypeFactory.isFunctionEnd(inputStr[i])){
                break;
            }
            tokenList.push(inputStr[i]);
            tokenStr = tokenList.join('');
            blocks.push(tokenStr)
        }
        blocks = blocks.splice(blocks.length-1);
        if(blocks[0].indexOf("(")==0){
            tokenStr+=")" ;
            blocks[0] = blocks[0] + ")"
        }
        if(blocks[0].indexOf("{")==0){
            tokenStr+="}" ;
            blocks[0] = blocks[0] + ")}"
        }
        var block = TokenTypeFactory.createTokenType(tokenStr);
        parsedBlocks.push(block);
        currentTokenIndex = block.parse(currentTokenIndex, blocks);
    }
    return parsedBlocks
}

var parsedBlocks = TemplateParse.parse(templateInputStr);

var tmpOutput = new Output();

parsedBlocks.forEach(function (data) {
    data.process(tmpOutput)
})




document.getElementById("root").innerHTML = tmpOutput.output;