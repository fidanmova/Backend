// require express
const express = require('express')
// require dotenv
require('dotenv').config()
// require bookRouter
const booksRouter = require('./routes/books')
// require authors router
const authorsRouter = require('./routes/authors')
// require indexRouter
const indexRouter = require('./routes/index')
const app = express()

// setting middleware
// 0- set the port
app.set('port', process.env.port || 3000)
// 1- view engine
app.set('view engine', 'ejs')
// where is views folder?
app.set('views', 'views')
// 2- public folder (Front end files)
app.use(express.static('public'))
// 3- use json url for post requests
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// 4- book route for any "/books" request
app.use('/books', booksRouter)
// 5- authors route for any "/authors" request
app.use('/authors', authorsRouter)
// 6- main router "/" for homepage
app.use('/', indexRouter)


app.listen(app.get('port'), ()=>{console.log('The server is running on port' + app.get('port'))})