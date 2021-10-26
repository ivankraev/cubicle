const { Router } = require('express')
const router = Router();
const productService = require('../services/productService')



router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', { title: 'Browse', products });
})

router.get('/create', (req, res) => {


    res.render('create', { title: 'Create' });
})

router.post('/create', (req, res) => {
    let data = req.body;
    productService.create(data)
    res.redirect('/')
})


router.get('/details/:id', (req, res) => {
    res.render('details', { title: 'Details', cube: productService.getOne(req.params.id) });
})

module.exports = router