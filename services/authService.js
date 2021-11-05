const User = require('../models/User')
const bcrypt = require('bcrypt')
const register = async({ username, password }) => {
    try {
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(password, salt)
        const user = new User({ username, password: hash })
        return user.save()
    } catch (err) {
        res.render('register', { err })
    }
}

const login = async({ username, password }) => {

}

module.exports = {
    register,
    login,
};