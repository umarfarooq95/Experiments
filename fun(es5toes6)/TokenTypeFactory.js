function TokenTypeFactory() {

}


TokenTypeFactory.createTokenType = function (tokenStr) {

    if(tokenStr == "function"){
        return new FunctionBlock()
    }
    if(tokenStr.indexOf("(") == 0){
        return new ArgumentBlock()
    }
    if(tokenStr.indexOf("{") == 0){
        return new FunctionBodyBlock()
    }
    if(/[\w]/.test(tokenStr)){
        return new FunctionNameBlock()
    }

}

TokenTypeFactory.isFunctionToken = function (token) {
    var regEx = new RegExp("")
    return (/function/.test(token))
};

TokenTypeFactory.isFunctionEndUptoName = function (token) {
    var regEx = new RegExp("")
    return (/\s/.test(token))
};
TokenTypeFactory.isFunctionEnd = function (token) {
    return (token.indexOf("}") != -1)
};
TokenTypeFactory.isFunctionBodyStart = function (token) {
    return (token.indexOf("{") != -1)
};
TokenTypeFactory.isArgumentEnd = function (token) {
    return (token.indexOf(")") != -1)
};
