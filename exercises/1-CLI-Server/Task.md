
# Simple CLI Server Program
​
### Create a simple server program in node js:
1. Create a js file called server.js
2. Make this program listen on port 3000, and show a message in terminal: "Server is running on port 3000"
3. Make this program respond to all incoming requests with a message" "This is my first server program with nodejs".
4. Run this program with nodejs
5. Make a request from browser
6. Try to edit the response message to make it like a title ```<h1>```
7. In the procedure function inside .createServer, try to log req argument and search for req.url, what you can see?
8. Try to make a new request from browser but ad at the end: ```/home```, so that the entire url is: ```localhost:3000/home```, then take a look at the the terminal see what is req.url again.
9. Try to make a new request from your smartphone, in this case your smartphone should be connected to the same wifi network as your computer, in your smartphone browser, type this as a url: ```http://YOUR_LAPTOP_NAME:3000```, you can find laptop name in ubuntu in setting section/about., so in this case you can see that your laptop is the server and your smartphone is the client.