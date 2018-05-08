function RepeatBlock() {

    this.variableName = "";
    this.templateBody = "";
    this.collectionName = "";

}


RepeatBlock.prototype.parse = function (currentIndex,tokens){
    this.variableName = tokens[++currentIndex];
    ++currentIndex;
    this.collectionName = tokens[++currentIndex];
    ++currentIndex;

    this.fromIndex = currentIndex;
    this.toIndex = currentIndex;

    while(currentIndex < tokens.length){
        var currentToken = tokens[currentIndex];
        if(!TokenTypeFactory.isRepeatEnd(currentToken)){
            currentIndex++;
            this.toIndex = currentIndex;
        }
        else {
            break;
        }
    }
    currentIndex++
    this.templateBody =  tokens.slice(this.fromIndex,this.toIndex).join(" ");
    return currentIndex

};



RepeatBlock.prototype.process = function (inputObj,tmpOutput) {
   var collections = inputObj[this.collectionName],
    templateBody = this.templateBody
    collections.forEach(function(collectionData){
        var block = new StringBlock();
        block.templatePortion = templateBody;
        block.process(collectionData,tmpOutput);
    })
};