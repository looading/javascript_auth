## question
1. 下列哪个函数更好，请说出理由。
```bash
function fac(n) {
	if(n==1) {
		return n
	}
	return n * fac(n-1)
}
function fac2(a,b) {
	if(a == 1) {
		return b
	}
	return fac2(a-1, a*b)
}
```