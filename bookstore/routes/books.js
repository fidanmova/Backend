const express = require('express')
const {booksHandler} = require('../controllers/bookscontroller')
const router = express.Router()
// create a controller "bookscontroller.js" to handle the get request for books hendler= booksHandler
// router.get('/', /*booksHandler*/)
// ur: mainDomain/books
router.get('/', booksHandler)




module.exports = router