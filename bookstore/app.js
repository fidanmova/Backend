// require express
const express = require('express')
const app = express()

// setting middleware
// 1- view engine
// 2- public folder
// 3- use json url for post requests
// 4- book route for any "/books" request
// 5- book route for any "/authors" request
// 6- main router "/" for homepage










app.listen(app.get('port'), ()=>{console.log('The server is running on port' + app.get('port'))})