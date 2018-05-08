function ArgumentBlock() {

    this.argument = "";

}


ArgumentBlock.prototype.parse = function (currentIndex,tokens){;

    this.fromIndex = currentIndex;
    this.toIndex = currentIndex;

    while(currentIndex < tokens.length){
        var currentToken = tokens[currentIndex];
        if(!TokenTypeFactory.isArgumentEnd(currentToken)){
            currentIndex++;
            this.toIndex = ++currentIndex;
        }
        else {
            this.toIndex = ++currentIndex;
            break;
        }
    }
    this.argument =  tokens.join(" ");
    currentIndex+= this.argument.length;
    return currentIndex

};


var strOutput = "";
ArgumentBlock.prototype.process = function (tmpOutput) {
    strOutput = this.argument + ' =>'
    tmpOutput.addOutput(strOutput);
};