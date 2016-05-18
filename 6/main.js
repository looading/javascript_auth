// 闭包
run(function() {
	var arr = []
	for(var i = 0; i < 10; i++){
		arr.push(function(){alert(i);})
	}
	for (var i = 0; i < 10; i++) {
		console.log(arr[i]());
	}
})