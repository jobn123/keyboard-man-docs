# 在文件中更快的移动
* ctrl + f 向下移动一屏
* ctrl + b 向上移动一屏
* ctrl + d 向下滚动半屏
* ctrl + u 向上滚动半屏
* Ctrl + e 向下滚动一行
* ctrl + y 向上滚动一行
* zz 将当前行置于屏幕中央
* zt 将当前行置于屏幕顶部
* zb 将当前行置于屏幕底部
* gg 调到文件首
* G 调到文件尾
* 行数 + gg/G 调到指定行

## vscode配置快速上下移动
```json
"vim.normalModeKeyBindings": [
        {
            "before": [
                "J"
            ],
            "after": [
                "5",
                "j"
            ]
        },
        {
            "before": [
                "K"
            ],
            "after": [
                "5",
                "k"
            ]
        }
    ],
    "vim.visualModeKeyBindings": [
        {
            "before": [
                "J"
            ],
            "after": [
                "5",
                "j"
            ]
        },
        {
            "before": [
                "K"
            ],
            "after": [
                "5",
                "k"
            ]
        }
    ],

```


