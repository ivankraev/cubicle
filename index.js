const express = require('express');

const config = require('./config/config')
const expressConfig = require('./config/express')
const app = express();

expressConfig(app);
app.get('/', (req, res) => {
    res.render('home', { layout: false })
})
app.get('/create', (req, res) => {
    res.render('create', { layout: false })
})
app.get('/about', (req, res) => {
    res.render('about', { layout: false })
})


















app.listen(config.PORT);