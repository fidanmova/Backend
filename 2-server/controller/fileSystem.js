const fs = require('fs')

// Read a file
exports.fileRead = function() {
    fs.readFile("./files/index.html",(err, data)=>{
        if(err) throw err;
        console.log('I can read a file')
        console.log(data)
    })
    return '<h1>Reading success<h1>'
}

// Update a file: a text(.txt), or .html
exports.updateFile = function() {
    fs.appendFile('files/ironman.txt', 'You created me as new file!', ()=>{
        console.log('A new file created')
    })
    return '<h2>File created<h2>'
}

// Delete existing file
exports.deleteFile = function() {
    fs.unlink('files/testFile10.txt', ()=>{
        console.log('1 file has been removed from the server')
    })
    return '<h2>1 file removed <h2>'
}

// Create file: writeFile(path, dataToUpdate, callback)
exports.fileCreate = function() {
    fs.appendFile('files/avenger.txt', 'Updated data', ()=>{
        console.log('textFile5.txt just updated')
    })
    return '<h2> textFile5.txt just updated <h2>'
}

// sync method
// create file synchronous way
exports.fileCreateSync = function() {
    const result = fs.appendFileSync('files/titanic.txt', 'Updated data')
    if(result) {
        console.log('synchronously file created')
    }
    return '<h2> a file created <h2>'
}
