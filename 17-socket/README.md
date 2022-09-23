# Web Socket Server
> WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011. The current API specification allowing web applications to use this protocol is known as WebSockets. It is a living standard maintained by the WHATWG and a successor to The WebSocket API from the W3C.
WebSocket is distinct from HTTP. Both protocols are located at layer 7 in the OSI model and depend on TCP at layer 4. Although they are different, RFC 6455 states that WebSocket "is designed to work over HTTP ports 443 and 80 as well as to support HTTP proxies and intermediaries", thus making it compatible with HTTP. To achieve compatibility, the WebSocket handshake uses the HTTP Upgrade header to change from the HTTP protocol to the WebSocket protocol.
The WebSocket protocol enables interaction between a web browser (or other client application) and a web server with lower overhead than half-duplex alternatives such as HTTP polling, facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the server to send content to the client without being first requested by the client, and allowing messages to be passed back and forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the server. The communications are usually done over TCP port number 443 (or 80 in the case of unsecured connections), which is beneficial for environments that block non-web Internet connections using a firewall. Similar two-way browser–server communications have been achieved in non-standardized ways using stopgap technologies such as Comet or Adobe Flash Player.
Most browsers support the protocol, including Google Chrome, Firefox, Microsoft Edge, Internet Explorer, Safari and Opera. [Wikipedia](https://en.wikipedia.org/wiki/WebSocket).


## Socket.IO
> Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.
Socket.IO primarily uses the WebSocket protocol with polling as a fallback option, while providing the same interface. Although it can be used as simply a wrapper for WebSockets, it provides many more features, including broadcasting to multiple sockets, storing data associated with each client, and asynchronous I/O. [Wikipedia](https://en.wikipedia.org/wiki/Socket.IO).

## Express Server With Socket.io
> **To create Websocket Server with express-js:**
1. Install `socket.io` package from `npm`:
    ```sh
    npm i socket.io
    ```
2. Create express server by storing `app.listen()` in a variable `server`
    ```javascript
    const server = app.listen(PORT, ()=>{
        // Server is Running log message...
    });
    ```
3. Import `socket.io` Package and pass `server` as a parameter.
    ```js
    const io = require('socket.io')(server);
    ```
4. Call connection event listener `io.on()`
    ```js
    io.on('connection', socket=>{
        //When any client connected, handle connections here...
    })
    ```
5. On Client Side, (web browser), load client script file
    ```html
    <script src="/socket.io/socket.io.min.js"></script>
    ```
6. Establish the connection with ws server
    ```html
    <script>
        const socket = io();
    </script>
    ```

## Send/Recive Messages
1. On Server Side:
```js
    io.on('connection', socket=>{
        // When Any Client Connected...
        // Read connection query parameters:
        console.log(ssocket.handshake.query)
        // example: if client connected to same origin with parameters:
        // FRONT_END: const socket = io("/?param1=value1&param2=value2")
        // Join client to some room, exist or not
        socket.join('ROOM_NAME')
        // Broadcast message To All connected clients:
        io.emit('MESSAGE_NAME', MESSAGE);
        // Recive messages from clients:
        socket.on('MESSAGE_NAME', MESSAGE=>{
            // Handle message here...
            // Send a response to SENDER ONLY:
            socket.emit('MESSAGE-NAME', RESPONSE);
            // Broadcast a response to All clients EXEPT SENDER:
            socket.broadcast.emit('MESSAGE-NAME', RESPONSE);
            // Send Message to a Specific Client:
            socket.to('USER_ROOM_NAME').emit('MESSAGE-NAME', RESPONSE);// Make sure in this case that the client joined to a specific room
            // Kill Client Connection:
            socket.disconnect();
        });

        // Event When Client disconnected
        socket.on('disconnect', ()=>{
            // do something here when user disconnected...
        });
    })
```
2. Client Side
```html
    <script>
        // Establish the connection to ws Server:
        const socket = io();
        // By Default io() should connect to same origin
        // to connect to an other origin:
        const socket = io('ORIGIN_NAME/');
        // Send parameters as query to origin:
        const socket = io('/?param1=value1&param2=value2');
        // Recive a message from Server:
        socket.on('MESSAGE_NAME', MESSAGE=>{
            // Handle message here...
        });
        // send a message to Server:
        socket.emit('MESSAGE_NAME', MESSAGE);
        // message could be a string, array, object, boolean, number

    </script>
```
## Security
> Always make sure not to open socket connection for any client, make sure that the client logined firs, you can use [express session](https://socket.io/how-to/use-with-express-session) to secure the connection.
## Resourses
> Read the [official documentation](https://socket.io/docs/v4/) site for Socket.io.

