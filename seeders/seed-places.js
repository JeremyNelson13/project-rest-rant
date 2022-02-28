const db = require('../models')


db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/public/images/teas.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'public/images/chocolate.jpg',
    founded: 2020
}])
.then(() => {
    console.log('sucessful')
    process.exit()
})
.catch(err => {
    console.log('failed', err)
    process.exit()
})