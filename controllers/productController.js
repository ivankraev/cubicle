const { Router } = require('express')
const Cube = require('../models/Cube')
const router = Router();
const uniqid = require('uniqid')

router.get('/', (req, res) => {
    res.render('home', { title: 'Browse' });
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

router.post('/create', (req, res) => {
    let data = req.body;
    let cube = new Cube(uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)
    console.log(cube);

    res.redirect('/')
})


router.get('/details/:id', (req, res) => {
    res.render('details', { title: 'Details' });
})

module.exports = router