/**
 * Step 01: import/add build-in module called "http"
 * Step 02: call createServer(callback(argument1, argument2)) method from http
 * Step 03: use listen(portNumber) from http to read or listen about the request
 */
const http = require('http') // call/invoke http module
const PORT = 5000
const myHost = "localhost"
// create a server
const server = http.createServer((request, response)=>{
    // response.end() can send response back to browser and end the request
    response.end('My backend is running fine!')
})
// listening server in a PORT and a hostname
server.listen(PORT, myHost, ()=>{
    console.log(`My first Nodejs Server is running! on PORT: ${PORT} and HostName: ${myHost}`)
})

