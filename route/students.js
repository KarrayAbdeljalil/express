const express = require('express')
const route = express.Router()
const students = require('../students')

route.get('/students', (req, res) => {
    res.json(students)
})

//get-one-student
route.get('/students/:id', (req, res) => {
    let student = students.filter(student => student.id === parseInt(req.params.id))
    if (student.length === 0) {
        res.json({msg :" there is no user with this ID: " + req.params.id})
    }else {
        res.json(student)
    }
})
//delete-one-student
route.delete('/students/:id', (req, res) => {
    let student = students.filter(student => student.id !== parseInt(req.params.id))
    res.json(student)
})
//add-one-student
route.post('/students', (req, res) => {
    res.json(students.concat(req.body))
})
//edit student
route.put('/students/:id', (req, res) => {
    res.json(students.map(el => el.id === parseInt(req.params.id) ? {...req.body, id: el.id} : el))
})

module.exports = route