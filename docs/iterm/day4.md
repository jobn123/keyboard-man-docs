# zsh-vi-mode 高级使用技巧

## surround
- S "  可视化模式下加 "
- ys " 可视化模式下加 " 
- cs * ' 将 * 替换成'
- ds " 删除 “

### 使用s-prefix 
将`ZVM_VI_SURROUND_BINDKEY=s-prefix`写入到`.zshrc`中
- sa '
- sd '
- sr * '

## 改键

[改键](https://github.com/jeffreytse/zsh-vi-mode#custom-widgets-and-keybindings)

## 复制到系统剪贴板

```js 
function zvm_vi_yank() {
  zvm_yank 
  echo ${CUTBUFFER} | pbcopy
  zvm_exit_visual_mode
}
```

## increment and decrement
- ctrl + a
- ctrl + x