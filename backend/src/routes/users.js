const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/:id')
    .get((req,res) => {
        res.send(`User ID ${req.params.id}`)
    })
    .put((req,res) => {
        res.send(`Update User ID ${req.params.id}`)
    })
    .delete((req,res) => {
        res.send(`Delete User ID ${req.params.id}`)
})

module.exports = router