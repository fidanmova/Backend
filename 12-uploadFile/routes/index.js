var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("GET_Query", req.query);
  res.render("home", { title: "Express" });
});

/**
 * POST, req.body NO URL
 * GET: req.query
 */

router.post("/", (req, res) => {
  // console.log(req.body)
  // console.log(req.files)
  const fileName = req.files.myFile.name;
  console.log(fileName);
  /**
   * FILE_OBJECT.mv(PATH, ERROR)
   */
  req.files.myFile.mv(
    path.join(__dirname, "../uploads/" + fileName),
    (error) => {
      if (error) {
        res.json({ error: error });
      } else {
        res.json({ success: true, error: null });
      }
    }
  );
  // res.json(req.body)
});

router.post("/multi", (req, res) => {
  // check if file is exist
  console.log(req.files);
  if (!req.files) {
    res.json({ error: "No Files Selected" });
  } else {
    if (Array.isArray(req.files.myFile)) {
      for (let i of req.files.myFile) {
        let fileName = i.name;
        i.mv(path.join(__dirname, `../uploads/${fileName}`));
      }
    }else{
      let fileName = req.files.myFile.name;
      req.files.myFile.mv(path.join(__dirname, `../uploads/${fileName}`))
    }

    res.json({ success: true });
  }
});


router.post('/imgupload', (req, res)=>{
  if(req.files.myFile.mimetype.split('/')[0] === "image"){
    let fileName = req.files.myFile.name;
    req.files.myFile.mv(path.join(__dirname, `../uploads/${fileName}`))
    res.json({success: true})
  }else{
    res.json({error: "ONLY IMAGES Please"})
  }
})

module.exports = router;
