const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./routes/routes');
const styleSheets = require('./routes/styleSheets');
const scripts = require('./routes/scripts');

process.env.TITLE = 'Hello';
process.env.APP_ROOT = __dirname;

const app = express();

app.use('/', routes);
app.use('/styleSheets', styleSheets);
app.use('/scripts', scripts);

app.listen(4000);
console.log('Listening on port ' + 4000 + '...');
