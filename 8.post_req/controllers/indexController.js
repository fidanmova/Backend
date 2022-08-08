const path = require('path')
const users = require('../data/users')
const fs = require('fs')
const indexHandler = (req, res)=>{
    //res.status(200).send("Home Page");
    //dirname /PATH/TO/MY/CONTROLLER/../views/index.html
    console.log('req.params====>',req.params)
    console.log(req.query)
res.sendFile(path.join(__dirname, "../views/index.html"))
}

const postHandler = (req, res)=>{
    // let obj = {
    //     name: "Germany",
    //     size: 500
    // }

    // req.query ===> GET request (/?something=bla&another=bla)
    //req.params ===> GET request (localhost:3000/t/anythinghere)
    // req.body ===> POST request

    //set an id to the new object
    let user = req.body
    // check if no users or empty file (empty database)
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 0 
    users.push(user)
    // store in file
    fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users), error=>{
        if(error){
            console.log(error)
            res.send("ERROR")
        }else{
            res.send("Success")
        }
    })
    //res.json(req.body)

    // res.send("POST Response Frome Server")
}

const getAllHandler = (req, res)=>{
    res.json(users)
}


const getUserHandler = (req, res)=>{
    //req.params.userId
    let user = users.find(u=> u.id == req.params.userId);
    if(user){
        res.json(user)
    }else{
        res.send("User not found")
    }
}

const getUserHandlerQuery = (req, res)=>{
    // req.query ===> {id: 0, name: mmm}
    let user = users.find(u=> u.id == req.query.userId);
    if(user){
        res.json(user)
    }else{
        res.send("User not found")
    }
}

module.exports = {indexHandler, postHandler, getAllHandler, getUserHandler, getUserHandlerQuery}