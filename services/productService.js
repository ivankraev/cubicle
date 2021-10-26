const Cube = require('../models/Cube')
const uniqid = require('uniqid')
const productsData = require('../config/db')
const fs = require('fs')


function getAll() {
    return productsData
}


function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)
    productsData.push(cube)
    fs.writeFile(__dirname + '/../config/db.json', JSON.stringify(productsData), (err) => {
        if (err) {
            return console.log(err);
        }
    })

}




module.exports = {
    create: createProduct
}