const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./routes/routes');
const styleSheets = require('./routes/styleSheets');
const scripts = require('./routes/scripts');

process.env.PORT = 4000;
process.env.TITLE = 'Hello';
process.env.APP_ROOT = __dirname;

const app = express();

app.use('/', routes);
app.use('/styleSheets', styleSheets);
app.use('/scripts', scripts);

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT + '...');
