# obsidian day01

## 安装vimrc support 插件

### obsidian vim按键映射

在项目的根目录创建 `.obsidian.vimrc`

#### mode-specific 
- map -> normal/visual/operator pending modes
- map! -> insert
- nmap -> normal mode
- imap -> indert mode 
- vmap -> visual mode
- omap -> operator mode 

示例：`map H 0`

#### non-specific 
- noremap -> normal/visual/operator pending modes
- noremap! -> insert
- nnoremap -> normal mode
- inoremap -> indert mode 
- vnoremap -> visual mode
- onoremap -> operator mode 

## 通过vim 执行obsidian 的命令

命名的时候只支持驼峰命名

示例：
exmap back obcommand app:go-back
nmap: back
exmap forward obcommand app:go-forward
nmap :forward

## 查看obsidian 所有命令
- :obcommand 
- opt + cmd + i 后看console.log