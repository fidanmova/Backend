var express = require('express');
var router = express.Router();
const Email = require('../models/Email')
// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   // host: "smtp.mail.yahoo.com",
//   // port: 465,
//   service: 'yahoo',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/email', (req, res)=>{
  // console.log(req.body)
  // res.json(req.body)
  // sending email here
  // transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   // to: `${req.body.email}, anotherWother.other`, Multiple emails
  //   to: req.body.email,
  //   subject: req.body.subject,
  //   // text: req.body.message,
  //   html: req.body.message
  // }).then(info=>{
  //   res.json(info)
  // }).catch(error=>{
  //   res.json(error)
  // })
  Email.send(req.body.email, req.body.subject, req.body.message).then(result=>{
    res.json(result)
  }).catch(error=>{
    res.json(error)
  })
})

module.exports = router;
