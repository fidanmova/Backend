const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res)=>{
    // res.end("<h1>Hello From App</h1>")
    fs.readFile(__dirname + "/views/index", (error, data)=>{
        if(error){
            console.log(error)
            console.log("ERROR", error.message)
            res.end(JSON.stringify(error))
        }else{
            console.log(data.toString())
            res.end(data)
        }
    })
})
console.log("__dirname: ", __dirname)

server.listen(3000, ()=>console.log("The server is running on port 3000"))