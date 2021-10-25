const { Router } = require('express');
const router = Router();
const productController = require('./controllers/productController')


router.use(productController)


module.exports = router