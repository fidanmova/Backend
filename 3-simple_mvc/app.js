const http = require('http')
const loadFile = require('./models/loadFile')



const server = http.createServer((req, res)=>{
    // res.end("<h1>Hello From App</h1>")
    console.log("\x1b[31mreq.url======> ", req.url.split('/')[0] + "\x1b[0m")
    console.log('\x1b[33mMethod: ', req.method + "\x1b[0m")
    // if the browser asking for front-end files
    if(req.url.split('/')[1] === "public"){
        loadFile.loadView(__dirname + req.url).then(data=>{
            // take the extention file from request
            // /public/..../NAME_OF_THE_FILE.EXTENTION
            let extention = req.url.split(".")[req.url.split(".").length - 1]
            res.writeHead(200, {"content-type": `text/${extention === "js"?"javascript": "css"}`})
            res.end(data)
        }).catch(error=>{
            console.log(error)
            res.end(JSON.stringify(error))
        })
    }// for other pages or data
    else{
          switch (req.url){
        case "/":
           loadFile.loadView(__dirname + "/views/index.html").then(data=>{
                res.end(data)
            }).catch(error=>{
                res.end(JSON.stringify(error))
            })
            break;
        case "/about":
            loadFile.loadView(__dirname + "/views/about.html").then(data=>{
                res.end(data)
            }).catch(error=>{
                res.end(JSON.stringify(error))
            })
            break;
            case "/api":
                let obj = {
                    name: "Mostafa",
                    age: 20
                }
                res.end(JSON.stringify(obj))
            break
            // case "/public/css/style.css":
            //     loadFile.loadView(__dirname + "/public/css/style.css").then(data=>{
            //         res.writeHead(200, {"content-type": "text/css"})
            //         res.end(data)
            //     }).catch(error=>{
            //         console.log(error)
            //     })
            //     break
            //     case "/public/js/script.js":
            //     loadFile.loadView(__dirname + "/public/js/script.js").then(data=>{
            //         res.writeHead(200, {"content-type": "text/javascript"})
            //         res.end(data)
            //     }).catch(error=>{
            //         console.log(error)
            //     })
            //     break
            // Dyanmic
            
            default:
                res.writeHead(404)
                res.end("Cannot Get " + req.url)
    }  
    }


})



server.listen(3000, ()=>console.log("The server is running on port 3000"))