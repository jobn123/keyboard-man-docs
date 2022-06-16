# 替换字符串

## 替换命令 `:substitute`

公式: `:[range]s[ubstitute]/{pattern}/{string}/[flags]` [] 里面的内容可以不填

### range

- $ 到尾部
- % 全文
- number,number 从xx行到xx行

### pattern

支持正则

### flags

- g 全局
- c 对话框选择是否替换

### 多选操作

- gb 多选区分大小写

### 示例

- :s/vnode/haha 将vnode 替换为haha
- :%s/vnode/haha 全文替换只包含行首 
- :%s/vnode/haha/g 全文替换 
- :10,12s/vnode/haha 替换10-12行 
- gb gb gb 多选


## 练习

```js
vnode 

vnode 

vnode vnode haha
```