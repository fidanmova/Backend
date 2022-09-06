const createHttpError = require('http-errors');
const checkSomthing_1 = (req, res, next)=>{
    if(req.query.q == "f"){
      next()// pass to next
      console.log('NEXT IS DONE BEFORE')
    }else{
      // res.redirect('/')
      next(createError(404));
    }
  }
  
  const checkSomthing_2 = (req, res, next)=>{
    if(req.query.w == "k"){
      next()
    }else{
    //   res.redirect('/')
      next(createHttpError(404));
    }
  }

  const checkUser = (req, res, next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/')
    }
  }

  module.exports = {
    checkSomthing_1,
    checkSomthing_2,
    checkUser
  }