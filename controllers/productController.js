const { Router } = require('express')
const router = Router();
const productService = require('../services/productService')
const { validateProduct } = require('../helpers/productHelpers')


router.get('/', (req, res) => {
    let products = productService.getAll(req.query);
    res.render('home', { title: 'Browse', products });
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end())
})


router.get('/details/:id', (req, res) => {
    res.render('details', { title: 'Details', cube: productService.getOne(req.params.id) });
})





module.exports = router