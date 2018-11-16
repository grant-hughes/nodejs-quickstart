module.exports = {

  styleSheets: function(subComponents) {
    var styleSheets = [];
    for(var i = 0; i < subComponents.length; i++) {
      const subComponent = subComponents[i];
      styleSheets = styleSheets.concat(subComponent.dependencies()['styleSheets']);
    }
    return styleSheets;
  },
  scripts: function(subComponents) {
    var scripts = [];
    for(var i = 0; i < subComponents.length; i++) {
      const subComponent = subComponents[i];
      scripts = scripts.concat(subComponent.dependencies()['scripts']);
    }
    return scripts
  }
}
