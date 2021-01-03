const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

// route
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

// 미들웨어 세팅
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended : false }) );
// app.use( (req, res, next) => {
//     req.body = {
//     }
// });

app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin);
app.use('/contacts', contacts);

app.get('/portfolio', (req, res) => {
    res.send('portfolio get');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});