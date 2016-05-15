(function(){
	var h1 = document.querySelector('h1.text-center')
	setTimeout(function(){
		h1.style.color = 'red'
	}, 2000);
})()

// function fac(n) {
// 	if(n==1) {
// 		return n
// 	}
// 	return n * fac(n-1)
// }
// function fac2(a,b) {
// 	if(a == 1) {
// 		return b
// 	}
// 	return fac2(a-1, a*b)
// }
// var a = new Date().getTime();
// fac(10000)
// var b = new Date().getTime();


// var c = new Date().getTime();
// fac2(10000,1)
// var d = new Date().getTime();

// console.log(b, a, b-a, d, c, d-c);


/**
 * 两点间的距离
 */
// function Point() {
// 	var p1 = this[0];
// 	var p2 = this[1];
// 	var a = p2.x -p1.x;
// 	var b = p2.y - p1.y;
// 	return Math.sqrt(a*a + b*b)
// }

// var point = [
// 	{
// 		x : 0,
// 		y : 0,
// 	},
// 	{
// 		x : 1,
// 		y : 1
// 	}
// ]

// console.log(Point.apply(point));

// console.log(Point.bind(point)());
// 

/**
 * confirm 确认框
 */
// function moveon() {
// 	var answer = confirm('你准备好了么?');
// 	if(answer) window.location = "http://taobao.com";
// }
// setTimeout(moveon, 3000);
// 

/**
 * 指定区域输出调试信息
 */
// function debug(msg, type) {
// 	var log = document.getElementById('debuglog');
// 	if(!log) {
// 		log = document.createElement('div');
// 		log.id = 'debuglog';
// 		log.innerHTML = "<h1>Debug Log</h1>";
// 		document.body.appendChild(log);
// 	}
// 	var pre = document.createElement('pre');
// 	pre.className = type;
// 	var text = document.createTextNode(msg);
// 	pre.appendChild(text);
// 	log.appendChild(pre);
// }


// debug('message coming', 'danger')
// debug('message coming', 'info')
// debug('message coming', 'warnning')
// 


// calculate and make a chart
function calculate() {
	var amount = document.getElementById('amount'),
		apr = document.getElementById('apr'),
		years = document.getElementById('years'),
		zipcode = document.getElementById('zipcode'),
		payment = document.getElementById('payment'),
		total = document.getElementById('total'),
		totalinterest = document.getElementById('totalinterest');
	var principal = parseFloat(amount.value),
		interest = parseFloat(apr.value) / 100 / 12,
		payments = parseFloat(years.value) * 12;
	var x = Math.pow(1 + interest, payments),
		monthly = (principal * x * interest) / (x-1);

	if(isFinite(monthly)) {
		payment.innerHTML = monthly.toFixed(2);
		total.innerHTML = (monthly * payments).toFixed(2);
		totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

		save(amount.value, apr.value, years.value, zipcode.value);

		try {
			// getLenders(amount.value, apr.value, years.value, zipcode.value);
		} 
		catch(e) {

		}
		chart(principal, interest, monthly, payments);
	} 
	else {
		payment.innerHTML = '';
		total.innerHTML = '';
		totalinterest.innerHTML = '';
		chart();
	}
}

// save data
function save(amount, apr, years, zipcode) {
	// 只有在浏览器的时候才能运行此代码
	if(window.localStorage) {
		localStorage.loan_amount = amount;
		localStorage.loan_apr = apr;
		localStorage.loan_years = years;
		localStorage.loan_zipcode = zipcode;
	}
}

// find lenders (XMLHttpRequest)
function getLenders(amount, apr, years, zipcode) {
	if(!window.XMLHttpRequest) return ;
	var ad = document.getElementById('lenders');
	if(!ad) return ;

	var url = 'getLenders.php' 
		+ "?amt" + encodeURIComponent(amount)
		+ "&apr=" + encodeURIComponent(apr)
		+ "&yrs=" + encodeURIComponent(years)
		+ "&zip=" + encodeURIComponent(zipcode);

	var rep = new XMLHttpRequest();
	rep.open('GET', url);
	req.send(null)

	// 时间处理函数
	req.onreadystatechange = function() {

		// 服务器响应返回至客户端并且200
		if(req.readyState == 4 && req.status == 200) {
			var res = req.responseText;
			var lenders = JSON.parse(res);

			var list = '';
			for(var i = 0; i < lenders.length; i++) {
				list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a>";
			}

			ad.innerHTML = "<ul>" + list + "</ul>";
		}
	}
}


// 创建图表 (canvas)
function chart(principal, interest, monthly, payments) {
	var graph = document.getElementById('graph');
	// 清除并重置画布
	graph.width = graph.width;
	if(arguments.length == 0 || !graph.getContext) return ;

	var g = graph.getContext('2d');
	var width = graph.width,
		height = graph.height;

		// pymentToX
		function p(n) {
			return n * width / payments;
		}
		// amountToY
		function a(a) {
			return height - (a * height / (monthly * payments * 1.05));
		}

		g.moveTo(p(0), a(0));
		g.lineTo(p(payments), a(monthly * payments))
		g.lineTo(p(payments), a(0));
		g.closePath()
		g.fillStyle = "#f88";
		g.fill();
		g.font = "bold 12px sans-serif";
		g.fillText('Total Interest Payments', 20, 20);


		var equity = 0;
		g.beginPath();
		g.moveTo(p(0), a(0));
		for(var i=1; i<=payments; i++) {
			var thisMonthInterest = (principal - equity) * interest;
			equity += (monthly - thisMonthInterest);
			g.lineTo(p(i), a(equity));
		}
		g.lineTo(p(payments), a(0));
		g.closePath();
		g.fillStyle = "green";
		g.fill();
		g.fillText("Total Equity", 20, 35);

		var bal = principal;
		g.beginPath();
		g.moveTo(p(0), a(0));
		for (var i = 1; i<=payments; i++) {
			var thisMonthInterest = bal * interest;
			bal -= (monthly - thisMonthInterest);
			g.lineTo(p(i), a(bal));
		}
		g.lineWidth = 3;
		// 绘制曲线
		g.stroke();
		g.fillStyle = "black";
		g.fill();
		g.fillText("Loan Balance", 20, 50);

		g.textAlign = "center";
		var y = a(0);
		for(var year = 1; year*12 <= payments; year++) {
			var x = p(year*12);
			g.fillRect(x-0.5, y-3, 1, 3);
			if(year == 1) g.fillText("Year", x, y-5);
			if(year % 5 == 0 && year * 12  !== payments) {
				g.fillText(String(year), x, y-5);
			}
		}

		g.textAlign = "right";
		// 文字垂直居中
		g.textBaseLine = "middle";
		var ticks = [monthly * payments, principal];
		var rightEdge = p(payments);
		for(var i = 0; i < ticks.length; i++) {
			var y = a(ticks[i]);
			g.fillRect(rightEdge - 3, y - 0.5, 3, 1);
			g.fillText(String(ticks[i].toFixed(0)), rightEdge - 5, y);
		}
}

window.onload = function() {
	if(window.localStorage && localStorage.loan_amount) {
		document.getElementById('amount').value = localStorage.loan_amount;
		document.getElementById('apr').value = localStorage.loan_apr;
		document.getElementById('years').value = localStorage.loan_years;
		document.getElementById('zipcode').value = localStorage.loan_zipcode;
	}
}


function cal() {
	var graph = document.getElementById('graph');
	var g = graph.getContext('2d');
	g.moveTo(0,0);
	g.lineTo(30,90);
	g.lineTo(50,50);
	g.closePath();
	g.fillStyle = "red";
	g.fill();
}

