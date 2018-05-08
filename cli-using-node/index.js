#!/usr/bin/env node
const fs = require('fs');
const commandArguments = process.argv;
let fileName = commandArguments[2];
let content = commandArguments[3];
fs.writeFile(fileName + '.js', content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    process.exit(1)
});