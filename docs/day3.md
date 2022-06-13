# 掌握vim的语法

`操作符(operation) + 动作(区域范围)`

## 操作
* 删除 d
* 删除并进入插入模式 c
* 复制 y

## 基于单词的移动
* e 移动到单词结尾
* b 移动到上一个单词开头
* w 移动到单词的开头
* ge 移动到上一个单词的结尾

## 基于词串的移动(以空格作为基准)
* E 移动到词串结尾
* B 移动到上一个词串开头
* W 移动到词串的开头

## 组合
* cw ce 删除当前单词
* ea 在当前单词结尾处添加
* d 从当前字符删除到行首
* dL 从当前字符删除到行尾
* ce 删除当前单词重新键入

```javascript
// 练习
function getUserName() {
  const name = "my name is jack"
  return name
}
```
