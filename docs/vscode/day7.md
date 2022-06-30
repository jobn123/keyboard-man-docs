# 善用snippets

## 常用插件
- javascript code snippets
- vue3 snippets
- vue vscode snippets
- es7 + react/redux snippets
- ..... 根据自己工作需要选择

## 技巧
- tap 键可以切换位置
- cmd + i / ctrl + space 提示消失时可用

## 扩展，如何自己写一个

[官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
[生成工具](https://snippet-generator.app/)

- cmd + shift + p -> user snippets -> 选择全局或者项目内作用范围或基于类型选择

```json
{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.

	// Example:
	"Print to console": {
    // 作用范围
		"scope": "javascript,typescript",
    // 触发snippers
		"prefix": "log",
    // body 体
		"body": [
			"console.log('$1');",
			"$2"
		],
    // 描述
		"description": "Log output to console"
	}
}
```