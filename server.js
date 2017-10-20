//引入
var http = require("http");

var server = http.createServer(function(request,response){
	console.log("客户端和服务器已经建立通信!" + request.url);
	//发送响应头给请求      
	response.writeHead(200,{"Content-type":"text/plain"}); //纯文本
	//完成
	response.end("Hey NodeJS");
});

server.listen(3000,"127.0.0.1");        //当前服务器端口号,主机地址   
//触发listen后调用function(){}
console.log("server is running...");


