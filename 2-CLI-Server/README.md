# CLI Server Program

### A server in nodejs is a CLI program that runs on the command line and this program listens on some port, and this program responds to all incoming requests with a message.

### <i>imagine that the server program is like an <mark>Answer Machine</mark>.</i>

## Content
- [http module & HTTP Protocol](#http-module-&-HTTP-Protocol).
- [createServer Method](#createServer-Method).
- [listen Method](#listen-Method).
- [Port](#port).
- [Create a Request](#Create-a-Request).
    - [From Browser](#1--From-Browser).
    - [From Smartphone](#2--From-Smartphone).
- [Send Response](#Send-Response).
<hr>

## http module & HTTP Protocol
The Hypertext Transfer Protocol (HTTP) is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen in a web browser.([Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)).
> The connection between Server and browser established by the HTTP protocol.

To start a CLI server program in nodejs, we need to import the http module.

```js
const http = require('http');
```

<hr>

## createServer Method
`http.createServer()` is a method that creates a new server, and it takes a callback function as an argument, this callback function is called when a request is received, and it is called with two arguments, the request and the response.

```js
const server = http.createServer(function(request, response) {

});
```
Read More about this method in nodejs [official documentation> http.createServer](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener).

<hr>

## listen Method
`server.listen()` is a method that starts the server, and it takes a port number as an argument.
> The port number is a number that is used to identify the server.
> Without this method, the server will not start. because the server will not be listening on a port, and the program will close.

```js
server.listen(3000, function() {
    console.log('Server is running on port 3000');
});
```

<hr>

## Port
A port in computer networking is how a computer can use a single physical network connection to handle many incoming and outgoing requests by assigning a port number to each. The numbers go from 0 to 65535, which is a 16-bit number.
> Note that the port should not be in use by another program.

<hr>

## Create a Request
> A request can be sent from any browser.
### 1- From Browser
Simply, open any browser after starting the server if you are using the same computer., and type the url: `http://localhost:3000`, or `http://127.0.0.1:3000`.
### 2- From Smartphone
> A request can be sent from any smartphone.
> To send a request from smartphone, you need to connect to the same wifi network as your computer, `http://DEVICE_NAME:3000`, where `DEVICE_NAME` is the name of your computer, we can get device name in ubuntu in setting section/about. then you can use this url to send a new request from any device connecting to the same wifi network.

<hr>

## Send Response
A response is a message that is sent to the client when a request is received.
> The response <strong><mark>SHOULD BE ALWAYS AS A STRING</mark></strong> because of the http protocol.

```js
const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // writeHead(statusCode, headers)
    // statusCode is a number that is used to identify the status of the response.
    // headers is an object that contains the headers of the response.
    // Content-Type could be a text or a html. by default it is text/html.
    response.end('Hello World');
});
```

By Default, the status code is 200, and the content type is text/html.

Request Object contains a lot of methods and information about the request, like the url, the method, the headers, the body, etc.
```request.url``` is the url of the request. in this case we know what is the url that the browser/client asking for.
Example, if we make a new request from browser like this: `http://localhost:3000/home`, then `request.url` will be: `/home`, then we know that the client asking for ome page.

Then we can use switch case to handle the request.

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
### In next topics, we will see how to handle the request.



