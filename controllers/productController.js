const productController = {
    index(req, res) {
        res.render('home', { layout: false });
    },
    create(req, res) {
        res.render('create', { layout: false });
    }


};

module.exports = productController;