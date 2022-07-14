const express = require('express')
const fs = require('fs')
const router = express.Router()
// routes for product
router.get('/list', (req, res)=>{
    // list of products
    res.send('Here we see list of products')
})
// create a new product in product.json
router.post('/create', (req, res)=>{
    // receive a product from req.body object {}
    const newProduct = req.body
    fs.writeFile('product.json', JSON.stringify(newProduct), err=>{
        if(err) throw err;
        res.json('1 Product created')
    })
})
module.exports = router;