var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");

// console.log(myReadStream);

myReadStream.on("data",function(chunk){
	console.log("=======================接收chunk======================");
	console.log(chunk);
})