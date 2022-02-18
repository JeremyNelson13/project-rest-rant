const router = requires('express')

router.get('/', (req, res) => {
    res.send('GET /places')
})
//exports router
module.exports = router