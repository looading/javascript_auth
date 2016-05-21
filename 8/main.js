// 申明函数
run(function() {
	console.log(abs);

	function abs() {
		return 1;
	}
}, 0)

// 链式调用
run(function() {
	var func = {
		a: function() {
			console.log('a');
			return this;
		},
		b: function() {
			console.log('b');
			return this;
		},
		c: function() {
			console.log('c');
			return this;
		},
		d: function() {
			console.log('d');
			return this;
		},
		e: function() {
			console.log('e');
			return this;
		}
	}

	func.a().b().c().d().e()
}, 0)

// this
run(function() {
	var o = {
		a: function() {
			console.log('a');
			console.log('this', this);
			var b = '1';
			function a() {
				console.log('this', this);
			}
			a();
			(function(){
				console.log('this', this);
			})()

		}
	}
	o.a()
}, 0)

// 构造函数
run(function() {
	function Person() {
		this.name = "ctyloading"
	}

	Person.prototype.say = function() {
		console.log('1');
	}
	var p = new Person;
	console.log(p);
	p.say()
}, 0)


run(function() {

	/**
	 * __proto__ 原型链
	 * prototype 原型方法
	 * Person 继承Father
	 */
	function a() {
		console.log('1');
	}
	function b() {
		console.log('b');
	}
	a.__proto__ = b

	function Person() {
		this.name = "ctyloading"
	}
	function Father() {
		this.age = '123';
	}
	Person.prototype = new Father;

	function create(o) {
		var n = {};
		console.log(o.prototype);
		n.__proto__ = o.prototype;
		o.call(n);
		console.log(n);
		return n;
	}
	b.prototype.c = function() {
		console.log('c');
	}
	var p = create(Person)
	console.log(p, p.age);
}, 0)

// arguments
run(function() {
	'use strict'
	function a(x) {
		console.log(x);
		arguments[0] = 1;
		console.log(x);
	}
	a(2)
}, 0)

// 作为值的函数
run(function() {
	var a = [ function(x){return x*x;}, 20 ]
	console.log(a[0](a[1]));
}, 0)

/**
 * 加法器
 * issue('add', 1,2,3,4,5,6,7,8,9,10)
 */

run(function() {
	var list = {
		add: function() {
			var arg = Array.prototype.slice.call(arguments)[0];
						if(arguments == 1 && typeof arguments[0] == 'array') {
				arg = arguments[0]
			}
			if(arg.length > 1) {
				var sum = arg[0] + arg[1]
				for(var i = 2; i< arg.length; i++) {
					sum += arg[i]
				}
				return sum
			} else return arg[0];
		},
	}
	function issue(fn, a1, a2) {
		if(typeof list[fn] != 'function') throw new Error('fn is`t a function!');
		console.log(arguments);
		if(arguments.length > 2) {
			var arg = Array.prototype.slice.call(arguments, 1);
			return list[fn](arg);
		} else {
			return list[fn](a1, a2)
		}
	}
	console.log(issue('add', 1,2,3,4,5,6,7,8,9,10));
}, 1)