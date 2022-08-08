# View Engine

> A template engine facilitates you to use static template files in your applications. At runtime, it replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. So this approach is preferred to design HTML pages easily.

## Common view Engines:
<details><summary>Show Common view engines:</summary>
<ul>
<li><a href="https://ejs.co/">EJS</a></li>
<li><a href="https://pugjs.org/api/getting-started.html">PUG</a></li>
<li><a href="https://mustache.github.io/">Mustache</a></li>
<li><a href="https://www.dustjs.com/">Dust</a></li>
<li><a href="https://handlebarsjs.com/">Handlebars</a></li>
</ul>
</details>

## Setting view Engine in Express

> Before setting the routes we should tell express that we will use a specific view engine
```javascript
    // setting a view engine
    app.set("view engine", "ejs");
    // set view folder
    app.set("views", __dirname + "/views");
```
> Surely we must install view engine library from npm

```
    npm install <view engine library>
```
> Then we create views folder in root directory for the project, this folder should contains the view engine files.

## Using View Engine:
> After Setting the View Engine, we can easly use .render() method which is a member of response (res).

```javascript
    app.get('/', (req, res)=>{
        res,render('<engine file which is in views folder>', {})
        // note that you should NOT type the full file name, it should be without extention
        // you can pass an object as a second argument to be renderd in the template.
    })
```

## Reading data from EJS file:
> EJS is an easy view engine to use because it based in HTML syntax and only the variable or data has a special syntax to be renderd.

> here is an example how EJS file looks like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title%></title>
    <%- include('partials/links')%>
</head>
<body class="<%= dark==true? 'dark': 'light'%>">

    <div class="container">
        <!-- navbar starts -->
        <%- include('partials/navbar')%>
        <!-- navbar end -->
        <h1 class="text-center"><%= title%></h1>
        <%= content%>
    </div>
</body>
</html>
```

> As we can see the syntax is HTML, but only the data are something else.

to read a value is ejs we use:

``` <%= VARIABLE NAME %>```

> We can also do some process like if statement or for loop and many things in javascript

> and to do so we use:

```html
    <% if(some condition){%> 
        <h2>THis will appear if some condition true</h2>
    <%}%>
```

> Read more about [EJS view engine](https://ejs.co/).

> This is how the Project looks like, note the views folder contains the view engine files (ejs files), also inside it we can create multipl folders like partials folder to contains some static component to be included to the main template,


```
├── app.js
├── package.json
├── package-lock.json
├── products.json
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── README.MD
└── views
    ├── about.ejs
    ├── index.ejs
    ├── partials
    │   ├── links.ejs
    │   └── navbar.ejs
```



