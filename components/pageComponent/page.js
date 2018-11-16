const mustache = require('mustache');
const fs = require('fs');
const path = require('path');

var Page = function(components) {

  this.render = function() {

    const pageTemplate = fs.readFileSync(path.join(__dirname, '/page.html'), 'utf-8');

    var headerContents = '<title>' + process.env.TITLE + '</title>\n';
    var bodyContents = '';
    for(var i = 0; i < components.length; i++) {
      const component = new components[i];
      const styleSheets = component.dependencies()['styleSheets'];
      for(var j = 0; j < styleSheets.length; j++) {
        headerContents += '<link rel="stylesheet" type="text/css" href="' + styleSheets[j] + '">\n';
      }
      const scripts = component.dependencies()['scripts'];
      for(var i = 0; i < scripts.length; i++) {
        headerContents += '<script src="' + scripts[i] + '"></script>\n';
      }
      bodyContents += component.render();
    }

    const input = {
      headerContents: headerContents,
      bodyContents: bodyContents
    }

    return mustache.to_html(pageTemplate, input);
  }
}

module.exports = Page;
