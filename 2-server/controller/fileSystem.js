const fs = require('fs')

// Read a file
exports.fileRead = function() {
    fs.readFile("../files/index.html", (err, data)=>{
        if(err) throw err;
        console.log(data)
    })
}

// write a file