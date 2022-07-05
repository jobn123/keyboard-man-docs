# vscode 操作终端

## 打开终端
- cmd + j
- ctrl + ~

## 清空
- cmd + k 

## 分屏
- cmd + \

## 分屏切换
- cmd + [ / ]
需要改键`workbench.action.terminal.focusNextPane`和`workbench.action.terminal.focusPreviousPane`

## 关闭当前终端
- shift + alt + q

需要修改`workbench.action.terminal.kill`的值

## 新建终端
- shift + alt + n
需要修改`workbench.action.terminal.new`


## 终端窗口切换
- shift + cmd + [ / ]

## vscode打开系统终端
- shift + cmd + c

默认是打开系统终端，如使用iterm。需要在setting.json中配置`"terminal.external.osxExec": "Iterm.app"`