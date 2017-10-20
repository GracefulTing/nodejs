var counter = function(arr){
	return `数组中拥有${arr.length}个元素`;
}

//console.log(counter(['tt','dede']));

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}

var  pi = 3.142;


//只有使用module.exports之后,其他文件才可以引用
//对外公开
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//Module Patterns 模块模式          最终优化后的
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}