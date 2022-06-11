# 更高效的移动-想去哪里去哪里

## vim-easymotion
* <leader><leader> w 像后移动 到单词开头
* <leader><leader> b 像前移动到单词开头
* <leader><leader> e 向后移动到单词结尾
* <leader><leader> ge 向前移动到单词结尾
* <leader><leader> l 向光标位置右后部分全局移动
* <leader><leader> h 向光标位置左上部分移动  
* <leader><leader> j 向下移动到某一行开头
* <leader><leader> k  向上移动到某一行开头
* <leader><leader><leader> j 全局移动

## vscode 中开启vimeasymotion
默认的`<leader>`是`\`可修改为空格键比较好操作

```json
"vim.easymotion": true,
"vim.leader": "<Space>",
```

## vim-sneak
与 f 类似 使用方法也类似，之不过是全局的 `s+2个字符进行跳转`,s 与 vim中删除冲突最好修改下配置键

## vscode 开启vim-sneak

```json
"vim.sneak": true,
```

## 改键值

替换原生的f功能, 恢复s删除插入的功能
```json 
"vim.normalModeKeyBindingsNonRecursive": [
  {
      "before": [
          "f"
      ],
      "after": [
          "s"
      ]
  },
  {
      "before": [
          "F"
      ],
      "after": [
          "S"
      ]
  },
  {
      "before": [
          "s"
      ],
      "after": [
          "c",
          "l"
      ]
  },
  {
      "before": [
          "S"
      ],
      "after": [
          "^",
          "C"
      ]
  }
],
"vim.visualModeKeyBindingsNonRecursive": [
    {
        "before": [
            "f"
        ],
        "after": [
            "s"
        ]
    }
],
 "vim.operatorPendingModeKeyBindingsNonRecursive": [
    {
        "before": [
            "f"
        ],
        "after": [
            "z"
        ]
    },
    {
        "before": [
            "F"
        ],
        "after": [
            "Z"
        ]
    }
],
```

