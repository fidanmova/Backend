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
 * query ex: http://whatever/?value1=v1&value2=v2
 * req.query: {
 *  value1: "v1",
 *  value2: "v2"
 * }
 */
// FILE OBJECT EXAMPLE
//  {
//   name: 'FILENAME.EXT',
//   data: <Buffer 89 50 4e 47 0d ..........,
//   size: 37856,
//   encoding: '7bit',
//   tempFilePath: '',
//   truncated: false,
//   mimetype: 'image/png',
//   md5: '09ed2051ed0b6e784bede6e70c64e9e7',
//   mv: FUNCTION TO SAVE THE FILE
//  }

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

/**
 * To uploadfile:
 * 1- in app.js require the library (express-fileupload)
 * 2- in FRONTEND_FORM ADD Attribute: enctype="multipart/form-data"
 * 3- in the form, input type file set the name (ANY) ex name="myFile"
 * 4- to reade it, use req.files.myFile
 * 5- to store it, use req.files.myFile.mv(PATH, error)
 * 6- make sure to use the name of the file, req.files.myFile.name
 */

router.get('/download', (req, res)=>{
  res.download(path.join(__dirname, '../uploads/MongoDB_Logo.png'))
})


router.get('/loadImage', (req, res)=>{
  res.sendFile(path.join(__dirname, '../uploads/MongoDB_Logo.png'))
})

module.exports = router;
