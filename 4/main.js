// 数组直接量
run(function() {
	console.log([1,2,,,,,,5]);
}, 0)

// 运算顺序
run(function() {
	var a = 1;
	console.log((a++)+a);
}, 0)
run(function() {
	var a = 1;
	console.log((++a)+a);
})

// valueOf() toString()
run(function() {
	var obj = {};
	obj.valueOf = function() {
		return 1;
	}
	obj.toString = function() {
		return 2;
	}
	console.log(obj + 1);

	obj.valueOf = undefined;      
	console.log(obj + 1);

	obj.toString = undefined;
	// console.log(1 + obj);
	var x = '2';
	console.log(1 + +"1", 1 + 1, "1" + 1, 1 + 1 + 's', 's' + 1 + 1, 1 + null, ++x-1);
}, 0)

// 位操作符
run(function() {
	console.log(1111 & 0000);
	console.log(~~1,~1,~2,~3,~~'12',~'12',~~'12.22',~'12.22');
}, 0)

// eval
run(function() {
	'use strict'
	var b = '2'
	var a = function() {
		var c = '1';
		eval("var c = 12;console.log(c)");
		console.log(c);
	}
	a()
}, 0)

// void
run(function() {
	var a = function() {
		return 2;
	}

	console.log(a());
	console.log(void a());
}, 0)
