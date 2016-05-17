
// 闭包处理
function run(fn) {
	return (function(){
		fn()
		console.log('%c ------------ 华丽的分割线 ---------------', 'color: red');
	})();
}