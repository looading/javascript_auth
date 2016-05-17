## describe
```bash
1、 多行字符串
2、 舍入误差
3、 字符串是固定不变的
4、不可变的原始值(undefined, null, 布尔值, 数字, 字符串)和可变的对象引用 (对象)
```

## tool
闭包处理
```bash
function run(fn) {
	return (function(){
		fn()
	})();
}
```