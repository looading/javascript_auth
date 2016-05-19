// tail
run(function() {
	// 创建链表
	function createTail() {
		var arg = Array.from(arguments);
		var a = o = {}
		for (var i = 0; i < arg.length; i++) {
			var tmp = {};
			tmp.value = arg[i];
			o.next = tmp;
			o = tmp;
		}
		a = a.next;
		tmp.next = 'done';
		console.log(a);
		return a;
	}

	// 遍历链表
	function tail(o) {
		for( ; o.next; o = o.next) 
			console.log(o.value);
		return o

	}
	var cc = createTail(1,2,3,4)
	tail(cc)
}, 1)

// debugger
run(function() {
	console.log('asda') debugger;
}, 0)