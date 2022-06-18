# 掌握窗口的管理

## 新建窗口
- ctrl-w v 左右
- ctrl-w s 上下

## 窗口切换
- ctrl-w hjkl 上下左右切换
- ctrl-w w 来回切换（适合两个窗口之间切换）
  
## 关闭窗口
- ctrl-w c
- ctrl-w o 只保留当前窗口，关闭其他所有窗口

## 利用vscode 的自定义快捷键

### 新建窗口
- command + \ 左右切分
- command + ctrl + \ 上下切分

vscode 没有上下切分的快捷键、需要自己配置。`cmd + shift + p` 搜索 `split editor up` 然后键入 `cmd + ctrl + \`

### 关闭窗口
- command + w
- command + k + w 关闭所有

### 窗口切换
- shift + 方向键

修改keybing.json

```json
{
    // window move right 
    "key": "shift+right",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "l"]
    }
  },
  {
   // window move up 
    "key": "shift+up",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "k"]
    }
  },
  {
   // window move down 
    "key": "shift+down",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "j"]
    }
  },
  {
   // window move left 
    "key": "shift+left",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "h"]
    }
  }
```
### mac 配合 karabiner 将 ctrl + hjkl 改成方向键

- 创建一个json
```json
{
  "title": "Key settings for hhkb keyboard.",
  "rules": [
      {
        "description": "Change ctrl-HJKL to Arrow left,down,up,right",
        "manipulators": [
          {
              "type": "basic",

              "from": {
                "key_code": "h",
                "modifiers": {
                  "mandatory": ["control"],
                  "optional": [
                    "caps_lock",
                    "option",
                    "command",
                    "shift"
                  ]
                }
              },

              "to": [
                {
                  "key_code": "left_arrow"
                }
              ]
          },
          {
              "type": "basic",

              "from": {
                "key_code": "j",
                "modifiers": {
                  "mandatory": ["control"],
                  "optional": [
                    "caps_lock",
                    "option",
                    "command",
                    "shift"
                  ]
                }
              },

              "to": [
                {
                  "key_code": "down_arrow"
                }
              ]
          },
          {
              "type": "basic",

              "from": {
                "key_code": "k",
                "modifiers": {
                  "mandatory": ["control"],
                  "optional": [
                    "caps_lock",
                    "option",
                    "command",
                    "shift"
                  ]
                }
              },

              "to": [
                {
                  "key_code": "up_arrow"
                }
              ]
          },
          {
              "type": "basic",

              "from": {
                "key_code": "l",
                "modifiers": {
                  "mandatory": ["control"],
                  "optional": [
                    "caps_lock",
                    "option",
                    "command",
                    "shift"
                  ]
                }
              },

              "to": [
                {
                  "key_code": "right_arrow"
                }
              ]
          }
        ]
      }
  ]
}
```
- 将创建的json 放置在 `~/.config/karabiner/assets/complex_modifications/`下
- 打开 karabiner -> complex_modifications -> add rule 选择你自定义的就可以了

