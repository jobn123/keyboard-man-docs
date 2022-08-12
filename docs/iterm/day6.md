# zsh 自定义快捷键

## 查看
- bindkey 查看所有 
- bindkey `<keystroke> <widget>` 基于按键查看widgets

## 添加
- bindkey `<keystroke> <widget>` 绑定到已有的widgets里面
- bindkey -s `<keystroke> <keystroke>` 将一个快捷键绑定到另一个上
- bindkey -M `<keymap> <keystroke>` 绑定到具体的模式
  - bindkey -M viins u `<widget>`

## 删除
- bindkey -r `<keystroke>` 

## 功能键
- ctrl ^
- alt \e 

## keymap
- emacs emacs emulation
- viins vimode - insert mode 
- vicmd vimode - normal mode 
- viopp vimode - orerator-pending mode
- visual vimode visual mode 

## 帮助文档
- man zshzle 
- man-preview zshzle 

## 获取输入的字符
- cat -v