# 编辑内容的快捷键

## 常用
- cmd + e  只读模式
- cmd + b 加粗
- cmd + i 斜体
- cmd + k 加链接
- cmd + / 注释
- cmd + enter todo 
- opt + 上下键  上下行移动 
- f2 编辑文件标题

## 折叠
- zM 折叠全部
- zR 展开全部 
- za 折叠当前

```shell
exmap foldAll obcommand editor:fold-all 
nmap zM :foldAll

exmap unfoldAll obcommand editor:unfold-all 
nmap zR :unfoldAll

exmap troggleFold obcommand editor:toggle-fold 
nmap zR :troggleFold
```