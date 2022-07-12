const express = require('express')


const app = express()
// Middleware

// tell express public folder is public
app.use("/public",express.static('public'))



// getting home page
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/about", (req, res)=>{
    res.status(200).send("<h1>About page</h1>")
})


app.get("/api", (req, res)=>{
    let obj = {
        a: 10,
        b: "string",
        c: true,
        d: [4,5,6]
    }
    res.json(obj)
})

app.get("/h", (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/d', (req, res)=>{
    res.download(__dirname + "/views/data.txt")
})

// already exist !!! will not work
app.get("/", (req, res)=>{
    res.send("Other /")
})

app.get("/r", (req, res)=>{
    // redirect to home
    res.redirect('/')
})

app.listen(3000, ()=>console.log("Express server is running on port 3000"))