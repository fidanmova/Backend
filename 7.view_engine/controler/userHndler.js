const path = require('path')
const fs = require('fs')
const users = require('../data/users')
// let users = [
//     {
//         "name": "Person 1",
//         "age": 20
//     },
//     {
//         "name": "Person 2",
//         "age": 20
//     },
//     {
//         "name": "Person 3",
//         "age": 20
//     }
// ]
/**
 * user Handler Function 
 * @param {*} req 
 * @param {*} res 
 */
const userHandler = (req, res)=>{
    // res.send("This from controler")
    // res.sendFile(path.join(__dirname, '../views/index.html'))
    // basic idea to send data to be replaced in index.html file

    // reading index.html file
    // fs.readFile(path.join(__dirname, '../views/index.html'), (error, data)=>{
    //     if(error){
    //         res.send(error)
    //     }else{
    //         let htmlContent = data.toString()
    //         htmlContent = htmlContent.replaceAll("@@", users[0].name)
    //         res.send(htmlContent)
    //     }
    // })
    res.render('index', {title: "Users",persons: users, wisdom: "if nothing does right, go left", hot: true})
}




module.exports = {userHandler}