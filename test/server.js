var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var user = [];
var user_index;
var n = 0;
http.createServer(function (req, res) {
    var body = "";
    
    req.on('data', function (chunk) {
    body += chunk;
    });
    req.on('end', function () {
    body = querystring.parse(body);
    if(req.url == "/favicon.ico") return ;
    
    console.log(req.url);
    
    if (req.url.startsWith("/?id=")) {
        res.write(user.indexOf(req.url.slice(5)));
        res.end();
    }
    else {
        id = req.url.slice(1);
        if (!(id in user)){
            user.push(id);
        }
        res.write("<html><body>" +
            "<button onclick=\"loadDoc();\">switch</button>"+
            "<br> <p id='p1'>player1</p><p id='p2'>player2</p>"+ 
            "<body>" + "<script>" +
            "function loadDoc() {  " +
            "    var xhttp = new XMLHttpRequest();"+
            "    xhttp.onreadystatechange = function() {"+
            "      if (this.readyState == 4 && this.status == 200) {"+
            "        document.getElementById(\"p"+ "+\"(this.responseText+1)+\"" +"\").innerHTML += '1'"+
            "      }"+
            "    };"+
            "    xhttp.open(\"GET\", \"localhost:3000?id=" + req.url.slice(1)  +"\", true);"+
            "    xhttp.send();  " +
            "  }"+
            "</script>"
            );
            res.end();
            console.log(n++);
        }
    });
}).listen(3000);