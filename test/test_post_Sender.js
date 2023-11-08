var http=require('http');

var data="id=114514";
var req = http.request({
    hostname: 'localhost',
    path: '/',
    port: 8085,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    }
}, res => {
    if (res.statusCode !== 200) console.log(res.statusCode);
    res.on('data', d => {
        console.log(d.toString()); // 把接收到的内容输出到控制台
    });
});

req.write(data);
req.on('error', err => {
    console.log(err);
});
req.end();