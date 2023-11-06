var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
    body += chunk;
    });
    req.on('end', function () {
    body = querystring.parse(body);
    console.log(req.url);
    fs.readFile('new_file.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
    });
}).listen(3000);