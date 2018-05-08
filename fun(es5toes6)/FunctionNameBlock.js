
function FunctionNameBlock() {

    this.functionName = "";

}

FunctionNameBlock.prototype.parse = function (currentIndex,tokens){
    this.fromIndex = currentIndex;
    this.toIndex = currentIndex;
    
    while(currentIndex < tokens.length){
        var currentToken = tokens[currentIndex];
        if(TokenTypeFactory.isFunctionToken(currentToken)){
            currentIndex++;
            this.toIndex = currentIndex;
        }
        else {
            break;
        }
    }
    this.functionName =  tokens.join(" ");
    currentIndex+= this.functionName.length +1;
    return currentIndex
    
};

var strOutput = "";

FunctionNameBlock.prototype.process = function (tmpOutput) {
  strOutput = this.functionName + "="
    tmpOutput.addOutput(strOutput);
};

