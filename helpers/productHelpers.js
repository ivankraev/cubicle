exports.validateProduct = function validateProduct(req, res, next) {
    let isValid = true;
    if ((req.body.name.trim().length < 2) || !req.body.imageUrl) {
        isValid = false;
    }
    if (isValid) {
        next();
    } else {
        res.redirect('/create')
    }
}