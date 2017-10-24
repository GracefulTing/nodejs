var http = require("http");

var fs = require("fs");

var server = http.createServer(function(req,res){

	if(req.url  !== "/favicon.ico"){
		//console.log(req.url);
		if(req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			//res.end("这是home主页!");
			var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
			myReadStream.pipe(res);
		}else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			//res.end("这是about页面!");
			var myReadStream = fs.createReadStream(__dirname+"/about.html","utf8");
			myReadStream.pipe(res);
		}else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			//res.end("这是联系我们页面!");
			var myReadStream = fs.createReadStream(__dirname+"/contact.html","utf8");
			myReadStream.pipe(res);
		}else{
			res.writeHead(200,{"Content-type":"text/html"});
			//res.end("404:找不到您要的页面!");
			var myReadStream = fs.createReadStream(__dirname+"/error.html","utf8");
			myReadStream.pipe(res);
		}
	}

	//res.writeHead(200,{"Content-type":"application/json"});
	// var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// myReadStream.pipe(res);
	
});

server.listen(8080,"127.0.0.1");

console.log("server is running...");

