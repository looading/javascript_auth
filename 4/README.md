## describe
```bash
1 + + '1'
1++1
~~'12312.111' //向下取整


// void 忽略计算结果并返回undefined
run(function() {
	var a = function() {
		return 2;
	}

	console.log(a());
	console.log(void a());
})
```