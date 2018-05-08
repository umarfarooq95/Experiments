
function StringBlock() {

    this.templatePortion = "";

}

StringBlock.prototype.parse = function (currentIndex,tokens){
    this.fromIndex = currentIndex;
    this.toIndex = currentIndex;
    
    while(currentIndex < tokens.length){
        var currentToken = tokens[currentIndex];
        if(TokenTypeFactory.isStringToken(currentToken)){
            currentIndex++;
            this.toIndex = currentIndex;
        }
        else {
            break;
        }
    }
    this.templatePortion =  tokens.slice(this.fromIndex,this.toIndex).join(" ");
    return currentIndex
    
};

var strOutput = "";

StringBlock.prototype.process = function (inputObj,tmpOutput) {
  strOutput = this.templatePortion.replace(/\{\{([\w].+)\}\}/g, function (allPart, capturedPart) {
        return inputObj[capturedPart];
    });
    tmpOutput.addOutput(strOutput);
};

