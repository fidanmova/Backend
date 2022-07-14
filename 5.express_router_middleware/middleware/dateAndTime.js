/**
 * middleware:
 * - a function and works like an object
 * - parameters: req, res, next
 */
// its shows we are logged in
exports.login = (req, res, next)=> {
    const login = true
    if(login==true){
        next() // next middleware or response
    }
    else{
        res.json('You are not logged in!')
    }
}