const express = require('express');
const path = require('path');
const router = express();

router.get('/:styleSheet', function(req, res) {

  const styleSheetName = req.params.styleSheet;
  const componentName = styleSheetName.replace('Style.css', 'Component');
  const subPath = '/components/' + componentName + '/' + styleSheetName;

  res.type('text/css');
  res.sendFile(path.join(path.resolve(__dirname, '..'), subPath));
});

module.exports = router;
