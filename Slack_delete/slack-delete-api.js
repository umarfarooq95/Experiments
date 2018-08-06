var http = require("https");

function fetchFiles(){
    var options = {
        "method": "GET",
        "hostname": "slack.com",
        "port": null,
        "path": "/api/files.list",
        "headers": {
            "authorization": "Bearer xoxp-225995453056-225995453312-363832281360-d0c930cfda22f77a5f5c345770e49a4a",
            "cache-control": "no-cache",
            "postman-token": "35c1cef1-d553-f0aa-1e8b-643bad6a60c1"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.end();
}


fetchFiles();


function deleteFiles() {
    ( function () {

    })()
}

function deleteFile(id,deletefile) {

}