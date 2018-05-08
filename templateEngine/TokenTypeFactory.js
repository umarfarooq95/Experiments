function TokenTypeFactory() {

}


TokenTypeFactory.createTokenType = function (tokenStr) {

    if(tokenStr == "##repeat"){
        return new RepeatBlock()
    }

    if (tokenStr == "##if"){
        return new ConditionBlock()
    }

    return new StringBlock()

}


TokenTypeFactory.isStringToken = function (token) {
    var regEx = new RegExp("")
    return (!/.*[#]+/.test(token))
};

TokenTypeFactory.isRepeatEnd = function (token) {
    return (token.indexOf("##") != -1)
};

TokenTypeFactory.isIfEnd = function (token) {
    return (token.indexOf("##") != -1)
};
