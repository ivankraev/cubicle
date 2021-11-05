const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
    let user = await User.findOne({ username })
    if (!user) throw { message: "User not found" }
    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw { message: "Wrong password" }
    const token = jwt.sign({ _id: user._id }, 'somesecret')
    return token;
}

module.exports = {
    register,
    login,
};