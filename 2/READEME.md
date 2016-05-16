## describe
```bash
1、 由Unicode字符集编写
2、 区分大小写
3、 可选的分号

```

```bash
return
true;

--->
return; true;
```

```bash
var a
a
=
3
console.log(a)

--->
var a; a = 3; console.log(a);
```

```bash
var y = x + f
(a + b).toString()

--->
var y = x + f(a + b).toString()
```

```bash
;[x, x+1, x+2].forEach(console.log) //保证了正确的语句解析
```
```bash
x
++
y

--->
x; ++y;
```