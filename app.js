const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const PORT = 4000;

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT);
console.log('Listening on port ' + PORT + '...');
