/**
 * Task: Add all common routes here like index or landing page, contact page, about me etc
 * - create 2 seperate routes for user.js and product.js 
*/
const express = require('express')
const router = express.Router();
const User = require('../models/User')
const Product = require('../models/Product')

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

// login a user
router.post('/user/login', (req, res)=>{
    //console.log(req.body)
    /**
     * Check wherether user is exist in database or not
     */
    /**
     *  Model.findOne({
        fieldNameFromDB: data to compare
        })
     * */ 
    User.findOne({
            email: req.body.email, 
            password: req.body.password
        })
    .then(user=>{
        //console.log(user)
        // if there is a user or not null user
        if(user!=null){
            Product.find({added_by: user._id}).then(products=>{
                res.json({
                    user,
                    message: 'Successfully login',
                    products // array of object
                })
            })
        }
        else { //no user
            res.json('wrong data! please give us correct email and password')
        }
    })
})

// get massive data from fakerjs for test
const {faker} = require('@faker-js/faker')
router.get('/user/add', (req, res)=>{
    const userData = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email() 
    }
    console.log(userData)
    new User(userData).save(()=>{
        console.log('1 data created from faker...')
        res.json('one new user is created successfully!') 
    })
})

// Product routes to add or create product
router.get('/product/add/:userid', (req, res)=>{
    const userId = req.params.userid
    const productData = {
        product_title: faker.commerce.product(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number(),
        created_at: Date.now(),
        // how login can get user info or id?
        added_by: userId // after login or events
    }
    new Product(productData).save(()=>{
        res.json('1 product has been added')
    })
})

router.get('/productByUser/:productId', (req, res)=>{
    // all the products
    // Product.find().then((data)=>{
    //     res.json(data)
    // })
    // find 1 product based on id
    Product.findById(req.params.productId)
    .populate('added_by')
    .then(data=>{
        res.json(data)
    })
})

/**
 * task 1: display all products from database
 * result: 7 products
 */
router.get('/product/all', (req, res)=>{
    Product.find().then(result=>{
        res.json(result)
    })
})

/**
 * task 2: display all products from database but for specific user
 * result: 3 products
 */
router.get('/product/all/:user', (req, res)=>{
    const user = req.params.user;
    Product.find({added_by: user}).then(result=>{
        res.json(result)
    })
})

module.exports = router;