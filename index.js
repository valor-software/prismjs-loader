'use strict';
// todo: add support for plugins if requested
var Prism = require('prismjs');
var loaderUtils = require('loader-utils');

module.exports = function (content) {
  this && this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);

  if (!query.lang) {
    throw new Error('You need to provide `lang` query parameter');
  }


  if (!Prism.languages[query.lang]) {
    // todo: add per module require, when prism will be published per component
    require('prismjs/components/prism-'+ query.lang +'.js');
  }

  var lang = Prism.languages[query.lang];
  this.value = Prism.highlight(content, lang);
  return 'module.exports = ' + JSON.stringify(this.value);
};
module.exports.seperable = true;
