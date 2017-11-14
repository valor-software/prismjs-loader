'use strict';
const Prism = require('prismjs');
const loaderUtils = require('loader-utils');

module.exports = function loader(content) {
  const query = loaderUtils.getOptions(this);

  if (!query.lang) {
    throw new Error('You need to provide `lang` query parameter');
  }


  if (!Prism.languages[query.lang]) {
    /* eslint-disable */
    require(`prismjs/components/prism-${query.lang}.js`);
    /* eslint-enable */
  }

  const lang = Prism.languages[query.lang];

  const value = Prism.highlight(content, lang);
  const str = JSON.stringify(value);

  return `module.exports = ${str}`;
};

module.exports.seperable = true;
