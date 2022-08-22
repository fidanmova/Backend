/**
 * Task: Add all common routes here like index or landing page, contact page, about me etc
 * - create 2 seperate routes for user.js and product.js 
*/
const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res)=>{
    res.json('I am from Backend!')
})

// get user data from react client
router.post('/user/create', (req, res)=>{
    console.log(req.body)
    // save it to DB and response back to frontend
    new User(req.body).save(()=>{
        // Send message and user data
        console.log('data created...')
        res.json('A user is created successfully!') 
    })
})

// get massive data from fakerjs for test
const {faker} = require('@faker-js/faker')
router.get('/user/add', (req, res)=>{
    const userData = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        
    }
    console.log(userData)
    new User(userData).save(()=>{
        console.log('1 data created from faker...')
        res.json('one new user is created successfully!') 
    })
})

module.exports = router;