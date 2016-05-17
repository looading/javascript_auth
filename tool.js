function run(fn) {
	return (function(){
		fn()
	})();
}