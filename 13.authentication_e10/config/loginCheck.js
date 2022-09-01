// a middleware that check if user login or not
const jwt = require('jsonwebtoken')

exports.isLogin = (req, res, next)=>{
    if(!req.session.user) {
        res.json('You are not logged in')
    }
    else{
        next()
    }
}

exports.checkToken = (req, res, next) => {
    console.log(req.session.token)
    if(req.session.token==req.body.token) {
        jwt.verify(req.body.token,'i have secret info', (err, realData)=>{
            req.user = realData
            next()
        }) 
    }
    else{
        res.json('Invalid token. Please login')
    }
}