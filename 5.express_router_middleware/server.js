// declare or invoke of modules/packages in same place
const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 5000;
const axios = require('axios')
const fs = require('fs')

// settings

// routes and render/view
// routes: app.httpMethod('Path', callback(req, res))
app.get('/user/list', (req, res)=>{
    // 1 response at a time
    // render/view/present/display 
    // way 1
    // res.send('Hello Expressjs') // string
    const persons = [
        {"id": 1, "fullname": 'arif'},
        {"id": 2, "fullname": 'mostafa'}
    ]
    //res.send(persons) // string, js object, json
    // way 2
    //res.json({id: 1, name: 'arif'}) // only json, string
    // way 3
    //res.send(index.html) // not possible
    res.sendFile(__dirname+ '/index.html')
})


// get all users from api
app.get('/user/all', (req, res)=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(json => {
    //     res.json(json)
    // })

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result => res.json(result.data))
})

// setting for getting json data from client
app.use(express.json())

app.post('/user/create', (req, res)=>{
    // const user = {
    //     id: 1,
    //     name: "arif"
    // }
    // req.body: data from client/react/postman 
    console.log(req.body)
    const user = req.body
    // // fs module can write and save
    fs.writeFile('user.json', JSON.stringify(user), err=>{
        if(err) throw err;
        res.send('1 user is created')
    })
})



app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
