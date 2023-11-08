//导库，反正就是开导
var http = require('http');
var querystring = require('querystring');

var port = 8085; // 我的8080端口被占用了所以换一个

http.createServer(function (req, res) {

    var body = "114514"; //这是你想response的东西
    var post = ""; //接收到的post请求，post请求是分成多段发送的

    req.on('data', function(chunk){    
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        post = querystring.parse(post);
        res.end(body);
        console.log(post); // 在控制台输出post的内容
    });
}).listen(port);
