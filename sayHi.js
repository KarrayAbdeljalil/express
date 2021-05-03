const sayHi = (req, res, next) => {
    console.log('HELLO')
    next()
}
module.exports = sayHi