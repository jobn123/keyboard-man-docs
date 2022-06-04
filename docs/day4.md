# 更有效率的处理单字符

## 删除字符
* x 光标所在的字符
* X 删除光标前的字符
* s 删除当前光标字符并进入insert模式
* S 删除当前光标所在的行并进入insert模式

## 替换字符
* r 替换一个字符
* R 替换多个字符

## undo/redo
undo/redo 是基于一次可撤销块操作的。 
`可撤销块` 指的是进入插入模式开始，直到返回普通模式为止，在此期间输入或者删除的任何内容都被当成一次修改。

* u 撤销
* ctrl + r 取消

```javascript
const getUserName = function() {
  return 'ijjjj';
}
```