// a middleware that check if user login or not
exports.isLogin = (req, res, next)=>{
    if(!req.session.user) {
        res.json('You are not logged in')
    }
    else{
        next()
    }
}