const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const users = require('./users')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/sample', { useNewUrlParser: true })

app.use('/users', users)
app.use('/*', function(req, res) {
    res.send('Work in Progress....')
})

app.listen(3000)