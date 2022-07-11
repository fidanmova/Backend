const http = require('http')
const loadFile = require('./models/loadFile')



const server = http.createServer((req, res)=>{
    // res.end("<h1>Hello From App</h1>")
    console.log("\x1b[31mreq.url: ", req.url + "\x1b[0m")
    switch (req.url){
        case "/":
            // fs.readFile(__dirname + "/views/index.html", (error, data)=>{
            //     if(error){
            //         console.log(error)
            //         console.log("ERROR", error.message)
            //         res.end(JSON.stringify(error))
            //     }else{
            //         // console.log(data.toString())
            //         res.end(data)
            //     }
            // })
           loadFile.loadView(__dirname + "/views/index.html").then(data=>{
                res.end(data)
            }).catch(error=>{
                res.end(JSON.stringify(error))
            })
            break;
        case "/about":
            // fs.readFile(__dirname + "/views/about.html", (error, data)=>{
            //     if(error){
            //         console.log(error)
            //         console.log("ERROR", error.message)
            //         res.end(JSON.stringify(error))
            //     }else{
            //         // console.log(data.toString())
            //         res.end(data)
            //     }
            // })
            loadFile.loadView(__dirname + "/views/about.html").then(data=>{
                res.end(data)
            }).catch(error=>{
                res.end(JSON.stringify(error))
            })
            break;
            default:
                res.end("Cannot Get " + req.url)
    }

})



server.listen(3000, ()=>console.log("The server is running on port 3000"))