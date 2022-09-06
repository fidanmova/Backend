const express= require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send(`<h1>Admin Page</h1><p>Welcome ${req.session.user.name}</p>`)
})

router.get('/edit', (req, res)=>{
    res.send('<h1>Edit Admin Page</h1>')
})


module.exports = router