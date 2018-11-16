const mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const utils = require(path.join(path.resolve(__dirname, '..', '..'), 'utils/utils.js'));

var Example = function() {

  this.dependencies = function() {

    var styleSheets = [
      '/styleSheets/exampleStyle.css'
    ];
    var scripts = [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
      '/scripts/exampleScript.js'
    ];
    var subComponents = [];

    return {
      styleSheets: styleSheets.concat(utils.styleSheets(subComponents)),
      scripts: scripts.concat(utils.scripts(subComponents))
    }
  }

  this.render = function() {

    const exampleTemplate = fs.readFileSync(path.join(__dirname, '/example.html'), 'utf-8');

    var date = new Date();
    const input = {
      date: date
    }

    return mustache.to_html(exampleTemplate, input);
  }
}

module.exports = Example;
