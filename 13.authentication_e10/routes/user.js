const express = require('express')
const router = express.Router();
const User = require('../models/User')
//import { faker } from '@faker-js/faker'; e6
const { faker } = require('@faker-js/faker') //e5
const bcrypt = require('bcrypt');
const loginCheck = require('../config/loginCheck')
const jwt = require('jsonwebtoken')

// (C)create a new user
// Task: If this email is there send a message
// "This email already have an account. Please try another email"
router.get('/create', (req, res)=>{
    // get user new data
    const newUser = {
        username: faker.name.fullName(),
        email: faker.internet.email(),
        //password: faker.internet.password(),
        password: '1234', 
        avatar: faker.internet.avatar(),
        created_at: Date.now(),
        role: 'admin'
    }

    // encryption user password 
    const saltRound = 10
    // bcrypt.hash(data, saltnumber, callback)
    bcrypt.hash(newUser.password, saltRound, (err, hashPassword)=>{
        newUser.password = hashPassword // replace password with hashPassword
        new User(newUser).save(()=>{
          res.json('User successfully created')
        })
    })
})

// (R-Read)Find 1 user and login
router.post('/login', (req, res)=>{
    // data from client/postman {email, password}
    const {email, password} = req.body //client
    /**
     * for customers:
     * 1. email is not exist
     * 2. password doesnt match
     * or successfully logged in
     */
     // check email exist or not
     User.findOne({email}, (err, result)=>{
        if(err) throw err;
        if(result!=null) { // email is there
            // check password math with DB hash password
            bcrypt.compare(password, result.password, (err, isLogin)=>{
                if(isLogin) { // true
                    // Store/save user inside session for 1 day
                    //request.session.SessionVariable = value

                    const token = jwt.sign({result}, 'i have secret info', {
                        algorithm:'HS256',
                        expiresIn: '1h' //token session
                    })
                    req.session.token = token
                    console.log(req.sessionID)
                    req.session.save()
                    res.json({
                        success_message: 'Successful login',
                        token,
                        //result
                    })
                }
                else{
                    res.json('Password doesnt Match')
                }
            })
        }
        else{
            res.json('Email doesnot exist. Please create a user account.')
        }
     })
})

// login by JWT 
router.post('/login/jwt', (req, res)=>{
    //const user = {email: 'arif@gmail.com', password: '1213'} 
    const user = req.body;
    // jwt.sign(data, secret/private key)
    const token = jwt.sign(user, 'i have secret info', {
        algorithm:'HS256',
        expiresIn: '1h' //token session
    })
    res.json(token)
})

// Profile page after login with token 
router.post('/profile/jwt', loginCheck.checkToken,(req, res)=>{
    res.json({
        msg: 'Your Profile page',
        user: req.user
    })
})

// Profile page after login
router.get('/profile', loginCheck.isLogin,(req, res)=>{
    res.json({
        msg: 'Your Profile page',
        user: req.session.user,
    })
})

// Gallery page after login
router.get('/gallery', loginCheck.isLogin, (req, res)=>{
    res.json({
        msg: 'Your Picture gallery',
        user: req.session.user
    })
})

// logout by session destroy
router.get('/logout', (req, res)=>{
    req.session.destroy()
    res.json('Logged out')
})

module.exports = router;