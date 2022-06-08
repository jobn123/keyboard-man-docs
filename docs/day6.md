# 掌握文本对象

## 认识文本对象
文本是结构化（范围）的，可以快速选择

## 语法
* operator + (内部i、外部a) + 文本对象
* 可视化模式 + (内部i、外部a) + 文本对象

内部为`i`，外部使用`a`

## 文本对象
* w 一个单词
* (或) 一对括号
* b  同上（推荐使用）
* [或] 一对[]
* B 一对块 {}
* <或> 一对<>
* t xml标签
* ' 一对''
* " 一对“”
* ` 一对``
* s 一个句子
* p 一个段落

## tips for vscode vim pllugin

### vim-textobj-arguments 匹配参数
* ia 不包含分隔符
* aa 包含分隔符
* daa 删除一个参数
* cia 修改一个参数
* caa 修改一个参数连带删除逗号

### vim-textobj-onfire 匹配整个文本
* die 删除整个文本 不包含空格
* dae 删除整个文本 包含空格

## 练习

```javascript
function setName(_name, age) {
  const name =  _name;

  const name = "jack";
  const name = `jack`;
  const name = 'jack';
}
 
obj["name"]

this is a juzi.
this is juzi!
this is juzi?


<div> this is a test for t</div>
```