# Nodejs module

### Please create few nodejs module as contoller which can do below tasks

### target of learning: build-in and custom module(fs,http), controller, server etc.

## Tasks
- Task 01: create a folder called controller and then create modules files with any name you like
- Task 02: 1st module should do these tasks: Read, create, Update/write, delete, rename a file and text data
   * Hints: use fs build-in module
-  


```js
const server = http.createServer((req, res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Home Page</h1>');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>About Page</h1>');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 Page</h1>');
            break;
    }
}).listen(3000);
```
### In next topics, we will Middleware concept 



