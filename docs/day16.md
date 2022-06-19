# 操作函数

- % 匹配括号`( [ {`

## vim-indent-object
在函数体内使用一下该命令

- operator + ii 操作函数内部
- operator + ai 操作整个函数（js 会漏掉最后的})
- operator + aI 操作整个函数

## 删除一个函数
- dap/dip (函数体内有空格不可以)
- daI (必须要在函数体内执行该命令)
- V$%d (可配置改建成 leader + d + f)

## 练习
```js
function test() {
  console.log("test")
}

function getname(name="hha", 
age=18) {
  const a = "a";
  const b = "b";

  const arr = ["a", "b"];

  if (a === b) {
    console.log(name)
  }
}
```

```python
def printme (str):
  "打印"
  print str
  return
```