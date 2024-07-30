 <h1 align="center">
🔧 WEBPACK  Eslint - Prettier - Stylelint 🔦   </h1>

<p align="center">
  ⚡ Template config linters for React apps with TypeScript

</p>

## 👾Content👾

    	 "react@18.3.1"
    	 "react-dom@18.3.1"
    	 "sass@1.77.8"

## 🍓Husky🍓

Include in package.json

```
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"*.{css, scss}": [
			"stylelint --fix",
			"prettier --write"
		],
		"*.{js,jsx,tsx,ts}": [
			"eslint --fix",
			"prettier --write",
			"tsc --noEmit"
		]
	}
```

## 🍄commitlint🍄

- commilint prompt
  <a href="https://commitlint.js.org/reference/prompt.html#prompt"> CommitLint Prompt </a>
- commitlint/config-conventional
  <a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#commitlintconfig-conventional">commitlint/config-conventional<a/>
