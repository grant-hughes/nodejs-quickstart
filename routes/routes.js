const express = require('express');
const path = require('path');

const router = express();

router.get('/', function(req, res) {
    res.sendFile(path.join(path.resolve(__dirname, '..') + '/public/html/index.html'));
});

module.exports = router;
