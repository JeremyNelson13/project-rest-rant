//require express, require dotenv
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listens on port defined in .env file
app.listen(process.env.PORT)