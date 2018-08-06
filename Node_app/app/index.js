var http = require('http');
var url = require('url');


var server = http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);


    //Get the Path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');


    //Get the HTTP Method
    var method = req.method.toLowerCase();

    //Get the query string as an Object
    var queryStringObject = parsedUrl.query;


    //Get the Headers
    var headers = req.headers;


    //Send the Response
    res.end('Hello World\n');


    /*****Log the Path*****/
    //console.log('request recieved on path :' + trimmedPath + ' with method :' + method + ' and with these query string Parameters ',queryStringObject);
    console.log('request recieved with these headers :', headers);

});

server.listen(3000, function () {
    console.log('Server is listening on Port 3000 Now..')
});
