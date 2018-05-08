const output = (str, reg, target) => {
    target.innerHTML =
        str.replace(reg, str => `<span>${str}</span>`)
};

var dateStr = `12/16 
12-8
11/12/16
12-12-2016`;


// $ is the last word to find
// ^ is the beginning of the line
// . is the any character that follows
// + is the one or more token
var dateReg = /^12.+16$/gm;

//output(dateStr, dateReg, document.querySelector('pre'));


var lookAheadsStr = `foo
foobar
foobaz
fooboo`

// foo is the word to find
// () is capture Gruop that what to find
// ?= is match the character
// | is the or conditional
// ?! is the not match the character

var lookAheadsReg = /foo(?=bar|boo)/g;

//output(lookAheadsStr, lookAheadsReg, document.querySelector('pre'));


var shortHandStr = `aeiou $100 122.2`;

// [] is the character Classes  to find what the word is
// \w is the word \d is the digit \s is the whitespace
// [^\w] is same as \W,
// [^\d] is same as \D,
// [^\s] is same as \S
// if we use like this [^] that means in the character class of opposite.

var shortHandReg = /\W/g;

//output(shortHandStr, shortHandReg, document.querySelector('pre'));


var captureGropuStr = `foo
foobar
foobaz
fooboo`;

// foo is the word to find
// () is capture Gruop that what to find
// | is the or conditional
// ? is the quantifiers to our capturing group so if I wanted to say find foo followed by zero or more instances of bar or boo,


var captureGropuReg = /foo(bar|boo)/g;

captureGropuStr = captureGropuStr.replace(captureGropuReg,'**$1**');

//output(captureGropuStr, captureGropuReg, document.querySelector('pre'));


var areaCodeStr = `800-456-7890
(555) 456-7890
4564567890`;

// \d is the digit
// {3} is the number how much we should find
// [\s-] is the whitespace and dash
// ? is the optional for the character class


var areaCodeReg = /\(?(\d{3})\)?[\s-]?\d{3}[-]?\d{4}/g;

output(areaCodeStr, areaCodeReg, document.querySelector('pre'));
