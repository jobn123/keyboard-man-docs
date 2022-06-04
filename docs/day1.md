# vim 初识

## normal -> insert 模式
* i 前插入
* a 后插入
  
## insert -> normal模式
* esc
* `ctrl + [` (推荐)

## 方向键
* h 左
* l 右
* j 下
* k 上

## 倍速移动 `n (h l j k)`
比如说想向上移动5行就是按下5然后再按k、其他同理。

## 长按快速移动
设置里面找到键盘设置，将`key repeat`调整至`fast`，将`delay until repeat`调整至`short`、

## 终端中退出vim
* 保存后退出 -> 先输入 `ctrl + [`,然后输入 `:wq` 后回车、
* 强制退出 -> 先输入 `ctrl + [`,然后输入 `:q!` 后回车、

## 在终端中移动
* `ctrl + b` 左
* `ctrl + f` 右
* `ctrl + a` 移动到行头
* `ctrl + e` 移动到行尾
* `ctrl + u` 删除整行
 
## tips
插入模式完毕后立即切换到normal模式

```javascript
// 练习
const aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 11111111111111111111111111111111111111111111111111111;

const bbbbbbbbbbbbbbbbbbbbbbbb = 22222222222222222222222;
```