# zellij

[zellij](zellij.dev)

## 安装
- brew install zellij 

## 配置别名
- alias zj = 'zellij' 写入到.zshrc中

## 窗格的操作
- ctrl + p 
- opt + alt + h/j/k/l 切换窗格
- alt + +/ - 调整窗格大小

## 标签的操作
- ctrl + t 
- ctrl + t + n 新建
- ctrl + t + x 关闭
- ctrl + t + 方向键 切换tab

## session
- ctrl + o d 创建
- zj attach -c <session name>
- zj attach / a <session name> 使用session
- zj list-session  / zj ls 显示所有session
- zj kill-session <session name> / zj k 
- zj kill-all-sessions / zj ka 清空所有session

## sync
- ctrl + t s 窗口同步

## 滚动
ctrl + s j/k/u/d

## 清屏
- clear

## 修改配置
 
### 创建配置
- mkfir ~/.config/zellij
- zelliij setup --dump-config > ~/.config/zellij/config.yaml

[keys](https://zellij.dev/documentation/keybindings-keys.html)
