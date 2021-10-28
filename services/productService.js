const Cube = require('../models/Cube')
const uniqid = require('uniqid')
const productsData = require('../config/db')
const fs = require('fs/promises')


function getAll({ search, from, to }) {
    let result = productsData.slice()
    if (search) {
        result = result.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (from) {
        result = result.filter(x => Number(x.difficultyLevel) >= from)
    }
    if (to) {
        result = result.filter(x => Number(x.difficultyLevel) <= to)
    }



    return result
}

function getOne(id) {
    const cube = productsData.find(cube => cube.id == id)
    return cube
}


async function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)
    productsData.push(cube)
        /* promise */
    return await fs.writeFile(__dirname + '/../config/db.json', JSON.stringify(productsData, null, 2))

}




module.exports = {
    create: createProduct,
    getAll,
    getOne
}