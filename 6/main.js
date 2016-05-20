// 闭包
run(function() {
	var arr = []
	for(var i = 0; i < 10; i++){
		arr.push(function(){alert(i);})
	}
	for (var i = 0; i < 10; i++) {
		// console.log(arr[i]());
	}
}, 0)

// 5.18 阿里面试题
run(function() {
	Function.prototype.a = function() {
		return function(){
			console.log('a');
		}
	}

	Object.prototype.b = function() {
		console.log('b');
	}

	function Person() {

	}

	var p =  new Person
	console.log(p);

	// 两个函数能正常运行么
	p.a();
	p.b();
}, 0)

run(function() {
	function Person() {
		this.name = 'cty'
	}
	Person.prototype.sayName = function() {
		return this.name
	}

	var cty = new Person

	this.cty = cty
	this.Person = Person
}, 0)


// 继续书本练习
run(function() {
	var book = {
		name : 'js',
		pages: 1000,
		price: '$30'
	}
	console.log(book);
}, 0)

// 创建并继承对象
run(function() {
	var book = Object.create({name:'js', pages: 1000})
	console.log(book);
}, 0)


run(function() {
	function inherit(o) {
		if(o == null) throw TypeError();
		if(Object.creat) {
			return Object.create(o);
		}
		var t = typeof o;
		if(t !== 'object' && t !== 'function') throw TypeError();

		function f () {} // 定义一个构造函数
		f.prototype = o; // 圆型指向o
		return new f(); // 创建p的继承对象
	}


	var o = {};
	o.x = 1;
	var p = inherit(o);
	p.y = 2;
	var q = inherit(p);
	q.z = 3;
	var s = q.toString();
	console.log(q.x + q.y);
	this.q = q;
}, 0)

// 简单对象继承
run(function() {
	var person = {
		x: 1
	}
	var man = {
		y: 2
	}
	var child = {
		z: 3
	}
	child.__proto__ = man;
	man.__proto__ = person;

	console.log(child.x + child.y, 'x' in child, 'y' in child, child.hasOwnProperty('x'), child.hasOwnProperty('z'), Object.prototype.propertyIsEnumerable('toString'));
	this.child = child
}, 0)

run(function() {
	var o = {
		$name : 'ctyloading',
		set sex(value) {
			this.sexType = value;
		},
		get sex() {
			return '性别:' + this.sexType;
		}
	}
	this.o = o

}, 0)


// 存取器属性 返回随机数
run(function() {
	var random = {
		get int6() {
			return Math.floor(Math.random() * 1000000)
		},
		get octet() {
			return Math.floor(Math.random()*256)
		},
		get uint16() {
			return Math.floor(Math.random()*65536)
		},
		get int16() {
			return Math.floor(Math.random()*65536)-32768
		}
	}
	console.log(random.int6, random.int16, random.octet, random.uint16);
	console.log(Object.getOwnPropertyDescriptor(random , 'int6'));
	// this.random = random
}, 0)

run(function() {
	var o = {
		x: 1
	}
	console.log(Object.getOwnPropertyDescriptor(o, 'x'))
}, 0)


// 修改属性的特性
run(function() {
	var o = {};
	Object.defineProperty(o, 'x', {
		value: 1,
		writable: true,
		enumerable: true,
		configurable: false
	})
	this.o = o;
}, 0)

//  获取对象的类属性
run(function() {
	function Person() {
		this.sex = 'man';
		this.type = '汉族';
	}
	function classof(o) {
		if (o === null) return 'Null';
		if(o === undefined) return 'Undefined';
		return Object.prototype.toString.call(o).slice(8, -1);
	}
	var p = new Person();

	this.p = p;
	this.classof = classof;

}, 0)

// 序列化对象
run(function() {
	var o = {
		x: '1',
		y: {
			z: 2
		}
	}
	console.log(JSON.stringify(o));
	console.log(JSON.parse(JSON.stringify(o)));
	this.o = o;
}, 1)