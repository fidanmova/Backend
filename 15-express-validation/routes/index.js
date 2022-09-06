var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signin', (req, res)=>{
  if(req.query.name && req.query.password){
    // make session
    // localhost:3000/signin?name=ANY&password=ANY
    req.session.user = {
      name: req.query.name,
      password: req.query.password
    }
    res.redirect('/')
  }else{
    res.redirect('/')
  }
})

router.get("/signout", (req, res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
