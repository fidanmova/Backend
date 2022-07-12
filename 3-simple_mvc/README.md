# MVC In Nodejs Server
MVC (<mark><strong>M</strong>odel-<strong>V</strong>iew-<strong>C</strong>ontroller</mark>) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever)[MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC).

## Content
- [Standard Way to start Nodejs Server Project](#Standard-Way-to-start-Nodejs-Server-Project).
- [Main Structure of MVC in Nodejs Server Project](#Main-Structure-of-MVC-in-Nodejs-Server-Project).
- [Create a Model and use it](#Create-a-Model-and-use-it).
- [Create a View and use it](#Create-a-View-and-use-it).
- [Nodejs Server with Front-End Files](#Nodejs-Server-with-Front-End-Files).
- [__dirname in nodejs file](#__dirname-in-Nodejs).

<hr>

## Standard Way to start Nodejs Server Project
> The standard way to start a Nodejs Server Project is to use the `npm init` command, in the terminal, in the directory where you want to start the project, and then follow the instructions.
```bash
npm init
```
The `npm init` command will create a package.json file in the current directory, this file contains the information about this project like project name, version, author, entry point, dependencies, etc.
Here is an example of the package.json file:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A Nodejs Server Project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Author Name",
  "license": "ISC"
}
```
Note that you can add `start` script to the `scripts` object in the package.json file, and then you can run the project by typing `npm start` in the terminal.
<br>
After that we must add an entry point file in the current directory, this file is the entry point of the project, it could be `server.js` or `index.js` or `app.js` or whatever you want, but make sure it is a javascript file, and it should be in package.json file, in `main` property.

<hr>

## Main Structure of MVC in Nodejs Server Project
> To follow the main structure of MVC in Nodejs Server Project, we must create a folder called `models`, and a folder called `views`, and a folder called `controllers`.
<br>
For now, the controller is the main file of the project, and the view is the file that will be displayed to the user, and the model is the file that will be used to store the data.
<br>
So that the structure of the project will be:

```
ROOT_DIRECTORY_OF_PROJECT
├── models
│   └── loadFile.js
├── views
│   ├── about.html
│   └── index.html
├── app.js
├── package.json
└── README.md
```
Note: you can use `tree` command to see the structure of the project, to show folders first, use this `tree --dirs-first` command.

<hr>

## Create a Model and use it
The model defines what data the app should contain. If the state of this data changes, then the model will usually notify the view (so the display can change as needed) and sometimes the controller (if different logic is needed to control the updated view)[MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC#the_model).

<br>

To Create a Model, in models folder, we can create a js file, the name of this file depends on what this model will do.
<br>
we can define a lot of methods in this file, to be used in the anywhere in the project.
<br>
it's important to export all the functions inside this file, so that we can use them in the other files.
<br>
Here is an example of a model file:
```js
const something = ()=>{
    return "something";
}

function somethingElse(){
    return "something else";
}
module.exports = {
    something,
    somethingElse
}
```
Sense we want to export a multiple, we export an object of all the functions we want to export. `module.exports = {func_1, func_2, ..., func_n}`
<br>
then we can use this model inside any file in the project, by require this file
```js
const model = require("./models/MODEL_NAME");

model.func_1();
.
.
.
model.func_2();
.
.
.
model.func_n();
```

<hr>

## Create a View and use it
The view defines how the app's data should be displayed.

In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model [MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC#the_view).
<br>
In web development, the view is the page that is displayed to the user (browser), so the content of the view file should be HTML, it's not mandatory to make this file like HTML file, because we will not send the file itself to the user, but we will send the content of the file to the user.

<hr>

## Nodejs Server with Front-End Files
> The front-end files are required from browser to make a styling to the page, like css, or javascript, or images, or fonts, or any other file that is needed to be displayed to the user.
<br>
In our view file, it may contain a links or scripts like ` <link href="/some_cssFile.css"> ` or ` <script src="some_js_file.js"></script>` , so the browser will make a new GET request asking for those files. then we have to make a handler in server side to send this files to the browser.
<br>
Simply we can read what the browser asking for by `req.url`, then according to the url, we can send the file to the browser.
```js
if(req.url === "/some_cssFile.css"){
    res.writeHead(200, {'Content-Type': 'text/css'});
    // read css file and send it to the browser
    fs,readFile(PATH_TO_CSS_FILE, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end(data);
        }
    });
}
```
<br>
But a front0end files are more, then we can make some dynamic handler to read the request and send the files if exist to the browser.
<br>
To do so, we can create a new folder in the root of the project we usually call it `public`, then we can put all our front0end files in this folder.
<br>
Then the new structure for project will be like this:

```bash
ROOT_DIRECTORY_OF_PROJECT
├── models
│   └── loadFile.js
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       ├── script2.js
│       └── script.js
├── views
│   ├── about.html
│   └── index.html
├── app.js
├── package.json
└── README.md
```

Then in view file, we can use the `<link href="/public/css/style.css">` to link to the css file, and `<script src="/public/js/script.js"></script>` to link to the js file.
<br>
In server side, we can read the request, and if the request starts with `/public/`, then we know that the browser asking for front-end files, we can use `fs.readFile(__dirname + req.url)`.
<br>
So if the file exist, we can send it to the browser, and if not, we can send a 404 error.
<br>
<mark>NOTE:</mark> When we send css file, we must send it with `text/css` content type, and when we send js file, we must send it with `text/javascript` content type. So we can use `res.writeHead(200, {'Content-Type': 'text/css'});` to send css file, and `res.writeHead(200, {'Content-Type': 'text/javascript'});` to send js file.
<br>
Example:
```js
// if there is a request for front-end files, should starts with `/public/`, then we can send the file to the browser
if(req.url.split("/")[1] === "public"){
    fs.readFile(__dirname + req.url, (error, data)=>{
        // file not exist:
        if(error){
            res.writeHead(404)
            res.end();
        }else{
            // the file exist
            // we need now to know what type of file it is, so we can send it to the browser
            let extention = req.url.split(".")[1];
            if(extention === "css"){
                res.writeHead(200, {'Content-Type': 'text/css'});
            }else if(extention === "js"){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
            }
            res.write(data);
        }
    })
}
```
<br>
In this example, any file in public folder, will be accessible by the browser.
this is OK for front-end files, because those will helps the browser to display the page.
<br>

<hr>

## __dirname in Nodejs
> The __dirname in a node script returns the path of the folder where the current JavaScript file resides. __filename and __dirname are used to get the filename and directory name of the currently executing file.