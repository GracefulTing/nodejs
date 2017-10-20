var fs = require("fs");

var readMe = fs.readFileSync("readMe.txt","utf8");
//console.log(readMe);

fs.writeFileSync("writeMe.txt",readMe);

//异步  读取 & 写入
fs.readFile("readMe.txt","utf8",function(err,data){
	if(err) throw err;
	console.log(data);
});
console.log(124);

// fs.writeFile("writeMe.txt","hello",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// })

//异步读取文件readMe.txt,并将读取的文件内容写入到writeMe.txt中.
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// })


//删除
// fs.unlink("writeMe.txt",function(err,result){
// 	if(err) throw err;
// 	console.log(result);
// });

fs.mkdir("stuff",function(){

});

fs.rmdir("stuff",function(){
	
});