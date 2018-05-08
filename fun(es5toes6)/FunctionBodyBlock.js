
function FunctionBodyBlock() {

    this.bodyPortion = "";

}

FunctionBodyBlock.prototype.parse = function (currentIndex,tokens){
    this.fromIndex = currentIndex;
    this.toIndex = currentIndex;
    
    while(currentIndex < tokens.length){
        var currentToken = tokens[currentIndex];
        if(!TokenTypeFactory.isFunctionEnd(currentToken)){
            currentIndex++;
            this.toIndex = currentIndex;
        }
        else {
            this.toIndex = ++currentIndex;
            break;
        }
    }
    this.bodyPortion =  tokens.join(" ");
    currentIndex+= this.bodyPortion.length+1;
    return currentIndex
    
};

var strOutput = "";
var functionOutputBody = "";

FunctionBodyBlock.prototype.process = function (tmpOutput) {
    strOutput = this.bodyPortion;
    functionOutputBody = this.bodyPortion.replace(/\{([\w].+)\}/g, function (allPart, capturedPart) {
        return capturedPart
    });
    eval(functionOutputBody);
    tmpOutput.addOutput(strOutput);
};

