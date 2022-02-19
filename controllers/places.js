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
//exports router
module.exports = router