# 操作文件

## 切换到files exploer 区域
- shift + ctrl + h
- ctrl + ; (全局命令)

## 切换到edior 区域
- shift + ctrl + l
- ctrl + '

## 移动光标
jk

## 折叠展开
hl

## 创建文件
- a
- `<Leader> + n + f` 在当前文件目录下创建文件

## 创建文件夹
- A 
- `<Leader> + n + d` 在当前文件目录下创建文件夹

## 重命名
- r

## 删除
-d

## 配置

keybinding.json

```json
// 切换到资源管理器
  {
    "key": "ctrl+;",
    "command": "workbench.view.explorer",
    "when": "viewContainer.workbench.view.explorer.enabled"
  },
  // 切换到编辑区域
  {
    "key": "ctrl+'",
    "command": "workbench.action.focusFirstEditorGroup"
  },
  // 创建文件
  {
    "key": "a",
    "command": "explorer.newFile",
    "when": "filesExplorerFocus && !inputFocus"
  },
  // 创建文件夹
  {
    "key": "shift+a",
    "command": "explorer.newFolder",
    "when": "filesExplorerFocus && !inputFocus"
  },
  // 重命名
  {
    "key": "r",
    "command": "renameFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  // 删除
  {
    "key": "d",
    "command": "deleteFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
  },
```

settings.json

```json
// 创建文件
{
    "before": [
        "<Leader>",
        "n",
        "f"
    ],
    "commands": [
        "explorer.newFile"
    ]
},
// 创建文件夹
{
    "before": [
        "<Leader>",
        "n",
        "d"
    ],
    "commands": [
        "explorer.newFolder"
    ]
}
```