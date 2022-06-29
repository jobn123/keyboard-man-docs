# 搞定git

## 显示source control 面板
- `<leader> g g`

## stage changes
- `<leader> g s`

## commit
- leader g c 

## diff
-leader d f 

## unstage change 
- leader g u 

## discard change 
- leader g c l 

## vscode 插件 edamagit

## 配置
```json
 "vim.normalModeKeyBindingsNonRecursive": [
  {
      "before": [
          "<Leader>",
          "g",
          "g"
      ],
      "commands": "workbench.view.scm",
  },
  {
      "before": [
          "<Leader>",
          "g",
          "s"
      ],
      "commands": "git.stage",
  },
  {
      "before": [
          "<Leader>",
          "g",
          "c"
      ],
      "commands": "git.commit",
  },
  {
      "before": [
          "<Leader>",
          "g",
          "u"
      ],
      "commands": "git.unstage",
  },
  {
      "before": [
          "<Leader>",
          "g",
          "c",
          "l"
      ],
      "commands": "git.clean",
  },
  {
      "before": [
          "<Leader>",
          "g",
          "d",
          "f"
      ],
      "commands": "git.openChange",
  },
]
```