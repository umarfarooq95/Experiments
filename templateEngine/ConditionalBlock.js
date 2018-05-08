
function ConditionBlock() {
    this.conditionBlockTemplatePortion = "";
}
ConditionBlock.prototype.parse = function (currentTokenIndex, tokenArray) {

    this.LHSOperand = tokenArray[++currentTokenIndex];
    this.operator = tokenArray[++currentTokenIndex];
    this.RHSOperand = tokenArray[++currentTokenIndex];
    this.fromIndex = ++currentTokenIndex;
    while (currentTokenIndex < tokenArray.length) {
        var nextToken = tokenArray[currentTokenIndex];
        if (!TokenTypeFactory.isIfEnd(nextToken)) {
            currentTokenIndex++;
            this.toIndex = currentTokenIndex;
        }
        else {
            break;
        }
    }
    currentTokenIndex++;//to increment one after ##
    this.conditionBlockTemplatePortion = tokenArray.slice(this.fromIndex, this.toIndex).join(" ");
    return currentTokenIndex;
};
ConditionBlock.prototype.process = function (paramObject, templateOutput) {
    var leftOperand = paramObject[this.LHSOperand];
    var operator = this.operator;
    var rightOperand  = eval(this.RHSOperand);


    function checkOperator(a,b) {
        switch (operator) {
            case "<":return  a < b;
            case "<=":return  a <= b;
            case ">":return  a >b;
            case ">=":return  a >=b;
            case "==":return  a == b;
        }
    }
    var res = checkOperator(leftOperand,rightOperand);
    if(res){
        templateOutput.addOutput(this.conditionBlockTemplatePortion);
    }
};