const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

process.env.PORT = 4000;
process.env.TITLE = 'Hello';

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT + '...');
