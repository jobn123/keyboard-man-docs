# vim 调用 vscode 命令

## 查找vscode快捷键命令

`cmd + shift + p `> `open keyboard shortcuts` > 输入快捷键或者按照名称查找 

## 格式化文档

将vscode 中的 `shift + alt + f` 映射成 vim 的 `<Leader> + f + d`
```json
{
    "before": [
        "<Leader>",
        "f",
        "d"
    ],
    "commands": [
        "editor.action.formatDocument"
    ]
}
```

## 重命名

将vscode中的 f2 映射成 vim 中的 `<Leader> + r + n`

```json
{
    "before": [
        "<Leader>",
        "r",
        "n"
    ],
    "commands": [
        "editor.action.rename"
    ]
}
```

## 折叠代码

将vscode中的 `alt + cmd + [` 映射成 vim 中的 `<Leader> + [`

```json
 {
    "before": [
        "<Leader>",
        "["
    ],
    "commands": [
        {
            "command": "editor.fold"
        },
        {
            "command": "vim.remap",
            "args": {
                "after": [
                    "$",
                    "%"
                ]
            }
        }
    ]
}
```