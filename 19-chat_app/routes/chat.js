const express = require('express');
const router = express.Router();

/* GET chat listing. */
router.get('/', function(req, res, next) {
  res.render('chat', {title: "Chat App", nickName: req.query.nickName, color: req.query.color})
});

module.exports = router;
