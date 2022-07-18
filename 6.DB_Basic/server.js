const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const User = require('./model/userModel')

// settings
/**
 * Connect Database with MongoDB cloud account
 */
mongoose.connect('mongodb+srv://testUser:test1234@arifdci.fvkse.mongodb.net/test')
.then(()=>{
    console.log('MongoDB is connected...')
})

// Routes
// Create a user from User model and save it
app.get('/user/create', (req, res)=>{
    // how to create data based on model?
    const newUser = new User({
        first_name: 'Vassilis',
        last_name: 'Khan'
    })
    // save the data into DB using save() method
    newUser.save(()=>{
        res.json('1 User has been created')
    })
})

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
