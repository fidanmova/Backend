const express = require('express')
const {userHandler} = require('../controler/userHndler')
const router = express.Router()

// the handler: userHandler will process the request and send the response
router.get('/', userHandler)
// router.get('/', (req, res)=>{
//     // 
// })


module.exports = router