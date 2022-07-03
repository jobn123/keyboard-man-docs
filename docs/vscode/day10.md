# lazygit

# 安装

`brew install lazygit`

## 配置别名

`echo "alias lg=lazygit" >> ~/.zshrc`

## Global

```shell
 ← →↑↓/hjkl:               navigate
PgUp/PgDn or ctrl+u/ctrl+d:   scroll diff panel 
                                    (for PgUp and PgDn, use fn+up/fn+down on osx)
q:                                quit
p:                                pull
shift+P:                          push
```

## Files Panel:

```shell
space:    toggle staged
c:        commit changes
shift+C: commit using git editor
shift+S: stash files
t:        add patched (i.e. pick chunks of a file to add)
o:        open
e:        edit
s:        open in sublime (requires 'subl' command)
v:        open in vscode (requires 'code' command)
i:        add to .gitignore
d:        delete if untracked checkout if tracked (aka go away)
shift+R: refresh files
```

## Branches Panel:

```shell
space:   checkout branch
f:       force checkout branch
m:       merge into currently checked out branch
c:       checkout by name
n:       new branch
d:       delete branch
```

## Commits Panel:

```shell
s:       squash down (only available for topmost commit)
r:       rename commit
g:       reset to this commit
```

## Stash panel

```shell
space:   apply
g:       pop
d:       drop
```

## Popup Panel

```shell
esc:     close/cancel
enter:   confirm
tab:     enter newline (if editing)
```

## Resolving Merge Conflicits

```shell

←→/hl: navigate conflicts

↑↓/kj: select hunk

space:      pick hunk

b:         pick both hunks

z:         undo (only available while still inside diff panel)
```
