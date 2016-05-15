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

### knowledges
```bash
canvas : 
	getContext('2d')
	fillStyle
	fill()
	lineTo(x,y)
	moveTo(x,y)
	closePath()
	beginPath()
	stroke() // 绘制曲线
	fillText('string', x, y)
	font
	fillRect(x1, y1, x2, y2)
	textAlign
	textBaseLine
	lineWidth

localStorage: 
	localStorage.sss = 'sss'

js: 
	parseFloat()
	toFixed()
	appendChild()
	createTextNode()
```