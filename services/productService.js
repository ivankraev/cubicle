const Cube = require('../models/Cube')
const uniqid = require('uniqid')
const productsData = require('../config/db')
const fs = require('fs')


function getAll() {
    return productsData
}

function getOne(id) {
    const cube = productsData.find(cube => cube.id == id)
    return cube
}


function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)
    productsData.push(cube)
    fs.writeFile(__dirname + '/../config/db.json', JSON.stringify(productsData, null, 2), (err) => {
        if (err) {
            return console.log(err);
        }
    })

}




module.exports = {
    create: createProduct,
    getAll,
    getOne
}