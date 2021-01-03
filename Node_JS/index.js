const express = require('express');
const nunjucks = require('nunjucks');

// route
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use('/admin', admin);
app.use('/contacts', contacts);

app.get('/portfolio', (req, res) => {
    res.send('portfolio get');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});