const mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const wd = path.resolve(__dirname, '..');

var Index = function() {

  this.render = function() {
    const contents = {
      headContents: '<title>Hey</title>',
      bodyContents: '<h1>hello world</h1>'
    }

    var base = fs.readFileSync(path.join(wd, 'templates/base.html'), 'utf-8');

    return mustache.to_html(base, contents);
  }
}

module.exports = Index;
