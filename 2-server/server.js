// build-in module: the module already installed by nodejs
// e.g: http, https, fs
const http = require('http') 
// fs: file-system
const fs = require('fs')
const fileSystem = require('./controller/fileSystem')
// custom modules
const myModule = require('./myModule')
const PORT = 5000
const myHost = "localhost"
const server = http.createServer((request, response)=>{
    response.write(fileSystem.fileRead()) 
    response.end('success')
    // READ a file
    //fs.readFile(path, callback(err, data))
    // fs.readFile("./files/index.html", (err, data)=>{
    //     // if any error happens display in console
    //     if(err) throw err;
    //     // else
    //     console.log('Reading successful')
    //     response.write(data)
    //     response.end('HTML file read successfully')
    //     // brief of if else short cut
    //     // if(err) {
    //     //     console.log(err)
    //     // }
    //     // else {
    //     //     console.log('Reading successful')
    //     //     response.write(data)
    //     //     response.end('HTML file read successfully')
    //     // }
    // })
})
server.listen(PORT, myHost, ()=>{
    // display function and object here
    console.log(myModule.myName, myModule.age, myModule.myFunc(), myModule.myObj, myModule.method2())
    console.log(`My first Nodejs Server is running! on PORT: ${PORT} and HostName: ${myHost}`)
})

