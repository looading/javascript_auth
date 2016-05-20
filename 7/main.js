// test
run(function() {
	var arr = [ , ,];
	console.log(arr.length);
}, 0)


run(function() {
	var a = [1];
	console.log(a.length);
	a[1] = 3;
	console.log(a.length);
	a['x'] = 4;
	a['12312'] = 123;
	console.log(a.length);
}, 0)

run(function() {
	var arr = [1,2,3,4];
	Object.defineProperty(arr, 'length', {
		writable: false
	})
	console.log(Object.getOwnPropertyNames(arr));
	this.arr = arr
}, 0)

// 删除与添加
run(function() {
	var a = [];
	console.log(a);
	a.push(1);
	a.push(2)
	console.log(a);
	a.pop()
	a.unshift(6)
	console.log(a);
	a.shift();
	console.log(a);
	console.log(a.length);
	delete a[0];
	console.log(a.length, a);
}, 0)

// 插入、替换、删除
run(function() {
	var a = [1, 2, 3, 4];
	a.splice(1,0, 's')
	console.log(a);
}, 0)

// toString toLocaleString
run(function() {
	var a = [1,2,3,4,5, [1,2,[1,2,3,4],4]]
	console.log(a.join());
	console.log(a.toString());
	console.log(a.toLocaleString());
	console.log(a.toString());
	a.forEach(function(value, index, arr) {
		console.log(value, index, arr);
	})
	var b = a.map(function(x){
		if(typeof x !== 'number') return x;
		return x*x;
	})
	console.log(a, b);
}, 1)