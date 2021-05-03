const express = require('express')
const path = require('path')
const sayHi = require('./sayHi')
const student = require('./route/students')

//invoke express
const app = express()
//init middleware parser
app.use(express.json())
//middleware-static-folder
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', student)
/*app.use(sayHi)
app.get('/new', (req, res) => {
    res.send('HELLO WORLD')
})*/


/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})
*/

//server listen on port 5000
app.listen(5000, (err) => {
    if (err) {
        throw err
    }
    else{
        console.log('server is up running')
    }
})