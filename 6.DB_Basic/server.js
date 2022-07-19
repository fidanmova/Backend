const express = require('express');
const app = express();
require('dotenv').config();
const PE = process.env;
const PORT = PE.PORT;
const mongoose = require('mongoose')
const User = require('./model/userModel')

// settings
app.use(express.json())
/**
 * Connect Database with MongoDB cloud account
 */
mongoose.connect(`mongodb+srv://${PE.DB_User}:${PE.DB_password}@arifdci.fvkse.mongodb.net/${PE.DB_Name}`)
.then(()=>{
    console.log('MongoDB is connected...')
})

// Routes
// (C)Create a user from User model and save it
app.post('/user/create', (req, res)=>{
    // how to create data based on model?
    console.log(req.body)
    const newUser = new User(req.body)
    // save the data into DB using save() method
    newUser.save(()=>{
        res.json('1 User has been created')
    })
})

// (R): Read all users from DB
/**
 * Queries: get/read/find something from database
 */
// find all: Model.find(callback(err, result))
app.get('/user/all', (req, res)=>{
    User.find((err, result)=>{
        if(err) throw err
        res.json(result) // array of object 
    })
})

// find 1 user by id: findById(_id,callback(err, result))
app.get('/user/:id', (req, res)=>{
    const userId = req.params.id
    User.findById(userId, (err, result)=>{
        res.json(result) // object
    })
})

// findOne({key:value}, callback(err, result))
app.post('/user/getByCountry', (req, res)=>{
    User.findOne({country: req.body.country, age: req.body.age}, (err, result)=>{
        res.json(result)
    })
})

// (U)Update: modify existing data
app.post('/user/update/:id', (req, res)=>{
    const userId = req.params.id
    const dataToUpdate = {age: 8}
    // Model.findByIdAndUpdate(id, data, option, callback)
    User.findByIdAndUpdate(userId, dataToUpdate,{new:true}, (err, result)=>{
        res.json(result)
    })
})

// (D) delete: delete existing data
app.get('/user/delete/:id', (req, res)=>{
    const userId = req.params.id
    User.findByIdAndDelete(userId, (err)=>{
        res.json('1 User has been deleted')
    })
})



app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
