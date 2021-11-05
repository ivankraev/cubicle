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

    await authService.register({ username, password })
    res.redirect('/')

})

module.exports = router;