const express = require('express');
const path = require('path');
const router = express();

const Page = require(path.join(path.resolve(__dirname, '..'), 'components/pageComponent/page.js'));
const Example = require(path.join(path.resolve(__dirname, '..'), 'components/exampleComponent/example.js'));

router.get('/', function(req, res) {

  const page = new Page([
    Example
  ]);

  res.type('text/html');
  res.send(page.render());
});

module.exports = router;
