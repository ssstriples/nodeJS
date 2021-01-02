const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/portfolio', (req, res) => {
    res.send('portfolio get');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});