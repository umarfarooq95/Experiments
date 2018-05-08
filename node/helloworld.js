/*
 var http = require('http');
 http.createServer(function (req,res) {
 var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
 switch(path) {
 case '':
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Homepage');
 break;
 case '/about':
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('About');
 break;
 default:
 res.writeHead(404, { 'Content-Type': 'text/plain' });
 res.end('Not Found');
 break;
 }
 }).listen(2000);*/

//var express = require('express');
//var app = express();

/*app.set('port',process.env.port || 2000);

app.use(function (req,res) {
   res.type('text/plain');
    res.status(404);
    res.send('404 -Error')
});
app.listen(app.get('port'),function () {
   console.log("Express Started in localhost: " + app.get('port'))
});*/


const profile = new Map();
profile.set('twitter', '@adalovelace');
profile.set('facebook', '@adalovelace');
profile.set('googleplus', '@ada');
console.log(profile);
console.log(profile.size);

for(var k of profile){
    console.log(k)
}


const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);
for (const entry of tests) {
    console.log((entry[0]() === entry[1]) ? 'PASS' : 'FAIL');
}


/*Unleashing Zalgo*/

function createFileReader(fileName) {
    const listeners = [];
    return {onDataReady: listener => listeners.push(listener)}
};


