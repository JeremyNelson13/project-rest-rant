//require express, require dotenv (modules and global)
require('dotenv').config()
const express = require('express')
const app = express()

//express and view settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//controllers + routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

//listens on port defined in .env file
app.listen(process.env.PORT)