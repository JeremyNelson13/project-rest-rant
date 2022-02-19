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
       res.render('places/show_page', { place: places[id], id }) 
    }
    
})

router.put('/:id', (req, res) => {
    //update places stub
    res.send('PUT /places/:id stub')
})

//delete places route
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})

//edit places route
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit')
})

//post comment/rants route
router.post('/places/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
})
//delete rant/comment route
router.delete('/places/:id/rantId', (req, res) =>{
    res.send('DELETE /places/:id/rantId')
})
//exports router
module.exports = router