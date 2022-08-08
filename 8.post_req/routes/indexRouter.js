const express = require('express');
const {indexHandler, postHandler, getAllHandler} = require('../controllers/indexController')

// define the router
const router = express.Router();



// router.get('/', (req, res)=>{
//     res.status(200).send("Home Page");
// })
router.get('/', indexHandler)
// POST: NO URL
router.post('/', postHandler)

// GET request "/getall" ===> all users json format
router.get('/getall', getAllHandler)
//1- params: GET request for params "/getuser/0" ===> the first user in json format, make it dyanamic "getuser/:userId" req.params.userId
//2- query: GET request for processing query:
// url: "localhost:3000/users?id=0" in this case the first user as json
// hint: req.query 



module.exports = router