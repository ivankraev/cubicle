const express = require('express')
const config = require('./config/config')
const routes = require('./router')
const mongoose = require('mongoose')
const app = express()
require('./config/express')(app)
mongoose.connect('mongodb://localhost:27017/cubicle')
    .then(() => {
        console.log('db connected')
    });
app.use(routes)
app.listen(config.PORT);