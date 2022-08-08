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
    user.id = users[users.length - 1].id +1
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



module.exports = {indexHandler, postHandler}