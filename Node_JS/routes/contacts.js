const express = require('express');

const contacts = express.Router();

contacts.get('/', (req, res) => {
    res.send('contacts 이후 url');
})

contacts.get('/list', (req, res) => {
    res.send('contacts list');
})

module.exports = contacts;