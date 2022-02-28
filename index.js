//require express, require dotenv (modules and global)
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//express and view settings. these are middleware and need to be above the routes. These are between requests and the controller.
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//controllers + routes. must be BELOW require statements and middleware
app.use('/places', require('./controllers/places'))

//gets homepage and renders view
app.get('/', (req, res) => {
    res.render('home')
})
//404 route, catches disallowed routes and returns error view
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

//listens on port defined in .env file
app.listen(process.env.PORT)