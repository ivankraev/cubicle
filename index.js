const express = require('express')
const config = require('./config/config')
const routes = require('./router')
const app = express()
require('./config/express')(app)
app.use(routes)
app.listen(config.PORT);