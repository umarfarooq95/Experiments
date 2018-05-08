
function FunctionBlock() {

    this.function = "";

}

FunctionBlock.prototype.parse = function (currentIndex,tokens){
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
    this.function =  tokens.slice(this.fromIndex,this.toIndex).join(" ");
    currentIndex = this.function.length +1;
    return currentIndex
    
};

var strOutput = "";

FunctionBlock.prototype.process = function (tmpOutput) {
    strOutput = this.function.replace(/function/g,"let");
    tmpOutput.addOutput(strOutput);
};

