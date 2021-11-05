const { Router } = require('express');
const router = Router();
const productController = require('./controllers/productController')
const aboutController = require('./controllers/aboutController')
const authController = require('./controllers/authController')


router.use(productController)
router.use('/about', aboutController)
router.use('/auth', authController)
router.get('*', (req, res) => {
    res.render('404', { title: 'Error' });
})


module.exports = router