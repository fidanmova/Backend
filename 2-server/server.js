// build-in module: the module already installed by nodejs
// e.g: http, https, fs
const http = require('http') 
const PORT = 5000
const myHost = "localhost"
const server = http.createServer((request, response)=>{
    response.end('<h1>My backend is running fine!<h1>')
})
server.listen(PORT, myHost, ()=>{
    console.log(`My first Nodejs Server is running! on PORT: ${PORT} and HostName: ${myHost}`)
})

