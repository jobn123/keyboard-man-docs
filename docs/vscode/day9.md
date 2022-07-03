# vspacecode

## 安装

https://marketplace.visualstudio.com/items?itemName=VSpaceCode.vspacecode

## 初始化

- setting.json 通过在 space + ; 触发

```json
// vspaceCode
{
    "before": [
        "<space>",
        ";"
    ],
    "commands": [
        "vspacecode.space"
    ]
}
```

- keybinding.json 全局触发命令 space 

```json
{
    "key": "space",
    "command": "vspacecode.space",
    "when": "activeEditorGroupEmpty && focusedView ===  '' && !whichkeyActive && !inputFocus"
  },
  {
    "key": "space",
    "command": "vspacecode.space",
    "when": "sideBarFocus && !inputFocus && !whichkeyActive"
  }
```

## 修改、删除、重写原有配置
https://vspacecode.github.io/docs/menu-customization

## vim 代替 弹窗的方式
https://github.com/VSpaceCode/VSpaceCode/tree/vscode-vim 