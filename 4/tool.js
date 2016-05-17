
// 闭包处理
function run(fn) {
	return (function(){
		fn()
		console.log('%c ------------ 华丽的分割线 ---------------', 'color: red; text-shadow:5px 0px 30px #FF0000;');
	})();
}