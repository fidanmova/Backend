exports.middleware1 = (req, res, next)=>{
    console.log('Middleware 1, url link:localhost:5000'+ req.originalUrl)
    req.user = {
        id: 1,
        name: "arif",
        job: "dci"
    }
    next()
}
exports.middleware2 = (req, res, next)=>{
    console.log('Middleware 2 '+ req.method)
    req.user.id = 5
    next()
}
exports.notMiddleware = (req, res)=>{
    console.log('I am not middleware')
}