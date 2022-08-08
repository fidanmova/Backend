const express = require('express');
const {indexHandler, postHandler} = require('../controllers/indexController')

// define the router
const router = express.Router();



// router.get('/', (req, res)=>{
//     res.status(200).send("Home Page");
// })
router.get('/', indexHandler)
// POST: NO URL
router.post('/', postHandler)


module.exports = router