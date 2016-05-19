// 非数字值的判断
run(function() {
	console.log(NaN != NaN, isNaN(NaN));
}, 0)

// 舍入误差
run(function() {
	console.log(.2-.1 == .3-.2, .4-.3 == .3-.2);
}, 0)

// Date
run(function() {
	var then = new Date(2011, 0, 1)
	var later = new Date(2011, 0, 1, 17, 30, 30)
	var now = new Date()
	console.log(now-then, later.getFullYear(), later.getTime(), later.getMonth(), later.getDate(), later.getDay(), later.getHours(), later.getUTCHours());
}, 0)
// 多行字符串
run(function() {
	var str = "nihao\
hello\
world";
	console.log(str);
}, 0)

// 字符串是固定不变的
run(function() {
	var s = 'test';
	s.len = 4;
	var a = s.len;
	console.log(a);
}, 0)

// Number
run(function() {
	var n = 11.21312;
	console.log(n.toFixed(2), n.toString(2), n.toExponential(3), n.toPrecision(3)); 
}, 0)

// 函数作用域 变量提升
run(function() {
	var scope = 'global';
	function f() {
		console.log(scope);
		var scope = "local";
		console.log(scope);
	}
	f();
}, 1)

// 作用域链