# 行相关的命令

## 移动

### 行首
* 数字 0
* ^ 移动到本行第一个不是blank字符的位置（tab、空格等）

### 行尾
* $
* g_ 移动到本行最后一个不是blank字符的位置（tab、空格等） 

### 修改行首、行尾配置键位
```json
"vim.normalModeKeyBindings":[
  {
    "before": ["H"],
    "after": ["^"]
  },
  {
    "before": ["L"],
    "after": ["g", "_"]
  }
]
```

## 插入
* 行首 I
* 行尾 A
* 行前 O
* 行后 o

## 复制当前行
* yy
  
## 粘贴
* p
 
## 删除当前行
* dd


```javascript
// 练习
var b = function() {

  const text = "hello";   
  console.log("hello")
  console.log("hello")
}
```