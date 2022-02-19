const router = require('express').Router();

//GET /places
router.get('/', (req, res) => {
    //places array, currently a mockup
    let places = [{
        name: 'H-Thai-ML',
        city: 'Boston',
        state: 'MA',
        cuisines: 'Thai, Fusion',
        pic: '/images/teas.jpg'
    }, {
        name: 'C#ocoholics',
        city: 'Wilmington',
        state: 'NC',
        cuisines: 'Dessert, Bakery',
        pic: '/images/chocolate.jpg'
    }, {
        name: 'Cafe Durango',
        city: 'New Orleans',
        state: 'LA',
        cuisines: 'French, New American',
        pic: '/images/grill.jpg'
    }, {
        name: 'VM Bistro',
        city: 'Atlanta',
        state: 'GA',
        cuisines: 'Soul Food, Catering',
        pic: '/images/soul-food.jpg'
    }]

    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places stub')
})

router.get('/new', (req, res) => {
    res.render('places/new_page')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})
//exports router
module.exports = router