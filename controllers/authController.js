const router = require('express').Router();
const authService = require('../services/authService')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async(req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        return res.render('register', { err: 'Password missmatch!' })
    }

    let user = await authService.register({ username, password })
    res.redirect('/auth/login')

})


router.post('/login', async(req, res) => {
    const { username, password } = req.body
    try {
        let token = await authService.login({ username, password })
        res.cookie('session', token)
        res.redirect('/')
    } catch (err) {
        res.render('login', { err })
    }
})

module.exports = router;