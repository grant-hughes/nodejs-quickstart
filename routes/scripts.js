const express = require('express');
const path = require('path');
const router = express();

router.get('/:script', function(req, res) {

  const scriptName = req.params.script;
  const componentName = scriptName.replace('Script.js', 'Component');
  const subPath = '/components/' + componentName + '/' + scriptName;

  res.type('application/javascript');
  res.sendFile(path.join(path.resolve(__dirname, '..'), subPath));
});

module.exports = router;
