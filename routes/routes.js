const express = require('express');
const path = require('path');

const router = express();
const wd = path.resolve(__dirname, '..');

const Index = require(path.join(wd, 'controllers/index.js'));

router.get('/', function(req, res) {

  var index = new Index();

  res.type('text/html')
  res.send(index.render());
});

module.exports = router;
