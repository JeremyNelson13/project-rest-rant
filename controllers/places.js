const router = require('express').Router();

//GET /places
router.get('/', (req, res) => {
    //places array, currently a mockup
    let places = [{
        name: 'H-Thai-ML',
        city: 'Boston',
        state: 'MA',
        cuisines: 'Thai, Fusion',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'C#ocoholics',
        city: 'Wilmington',
        state: 'NC',
        cuisines: 'Dessert, Bakery',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Cafe Durango',
        city: 'New Orleans',
        state: 'LA',
        cuisines: 'French, New American',
        pic: 'http://placekitten.com/250/250'
    }]

    res.render('places/index', { places })
})
//exports router
module.exports = router