const router = require('express').Router();
const places = require('../models/places.js')
//GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        //Default image if none provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/new', (req, res) => {
    res.render('places/new_page')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
       res.render('places/show_page', { place: places[id] }) 
    }
    
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})
//exports router
module.exports = router