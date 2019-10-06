# prismjs-loader for webpack
prismjs-loader for webpack, [PrismJS](https://github.com/PrismJS/prism)

# Installation

```bash
npm install -D prismjs-loader
```

# Usage

Don't forget to provide file type via query, so loader can choose correct component to use.
List of components to use: [link](https://github.com/PrismJS/prism/tree/gh-pages/components)
If component called `prism-apacheconf.js` you need to provide `apacheconf` via query.

On ui you need to add ref to stylesheet with prism theme,
demo of themes [here](http://prismjs.com/),
list of stylesheets [here](https://github.com/PrismJS/prism/tree/gh-pages/themes)

*Note*: don't use this loader in configuration, most probably you don't need it there

*Important*: use `!!` in require, to disable all other file loaders from webpack configuration
```js
var fileContent = require('!!prismjs?lang=markdown!./template.html');
// => returns highlighted html content

var fileContent = require('!!prismjs?lang=javascript!./index.js');
// => returns highlighted javascript content

```

# Contribution and Feature requests

If you need support of plugins welcome to create an issue or pull request,
currently plugins are not supported

# License
[MIT](LICENSE)
