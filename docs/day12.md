# 处理包裹的字符

## vim-surround插件

* `c s <existing> <desired>` 修改字符
* `y s <motion> <desired>` 添加字符
* `d s <desired>` 删除字符
* `S <desired>` 可视化模式下使用

## 示例
* c s ' `  将'改为`
* y s i w { 给一个单词加花括号
* `y s i w <div>`t  单词包裹标签
* d s " 删除字符周围的"
* 可视化模式下使用选择范围 + S 

## 练习

```js
import add from "./add"

<div>nihao</div>

const a = "b${name}"
```
