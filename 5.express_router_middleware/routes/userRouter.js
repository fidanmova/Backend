const express = require('express')
const router = express.Router()
const axios = require('axios');
const fs = require('fs')

// routes for user
router.get('/list', (req, res)=>{
    // 10 users
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result=> {
        //console.log(result)
        res.json(result.data)
    })
    .catch(err => console.log(err))
})

// http://localhost:5000/user/create
router.get('/:id', (req, res)=>{
    // 1 user
    axios.get('https://jsonplaceholder.typicode.com/users/' + req.params.id)
    .then(result=> res.json(result.data))
    .catch(err => console.log(err))
})

// create a new user in user.json
router.post('/create', (req, res)=>{
    // receive a user from req.body object {}
    const newUser = req.body
    fs.writeFile('user.json', JSON.stringify(newUser), err=>{
        if(err) throw err;
        res.json('1 user created')
    })
})

router.get('/:id/posts/:postid', (req, res)=>{
    // request parameters
    res.send(`Id: ${req.params.id} and postId: ${req.params.postid}`)
})

module.exports = router;