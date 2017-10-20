//在Nodejs中经常使用函数表达式

var sayHi2 = function(){
	console.log("Hello World!");
}


//正常函数
function sayHi1(){
	console.log("Hello!");
}

//sayHi();

//函数表达式比正常函数执行快.  
//函数表达式:右左法则	

function callFunction(foo){
	foo();
}

callFunction(sayHi1);