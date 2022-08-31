# Upload File With Nodejs Express

> To Upload file with `express js`, [express-fileupload](https://www.npmjs.com/package/express-fileupload) is the easiest npm package to use.

## Steps:

### 1. In Frontend side:
- Add `enctype="multipart/form-data"` attribute to the form
```html
    <form action="/URL" method="GET/POST" enctype="multipart/form-data">
        ...
    </form>
```

- for `input` make the attribute: `type="file"`
```html
    <input type="file" />
```
- You can make this input to accept a specific types of files using `accept` attribute. Read more about [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) attribute for file input.
```html
    <!-- For ONLY any audio -->
    <input type="file" accept="audio/*" />
    <!-- For ONLY any video -->
    <input type="file" accept="video/*" />
    <!-- For ONLY any image -->
    <input type="file" accept="image/*" />
```
- Set the name attribute for this input to read it in server side.
```html
    <input type="file" name="ANY" />
```
- Add `multiple` attribute to the input to allow select multiple files.
```html
    <input type="file" multiple />
```
2. On Server side:

- In entry file `(app.js/server.js)`, use `express-fileupload`:
    - require `express-fileupload` package.
    ```js
        const fileUpload = require('express-fileupload')
    ```
    - use this package in app:
    ```js
        app.use(fileUpload({
            options...
        }))
    ```
    - See available [options](https://github.com/richardgirges/express-fileupload#Available-Options).
    - After that, a new object will be added to each incoming request (`req.files`) if the request contains a file.
    - In each route in server side, if the incoming request has a file, we can read it like the following (FOR SINGLE FILE UPLOAD):
    ```html
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="mySweetFile" />
    </form>
    ```
    ```js
        // the form action attribute in this example is "/upload" and the method is "POST" and the file input name is: "mySweetFile"
        router.post('/upload', (req, res)=>{
            console.log(req.files.mySweetFile)
            /*
                it should be like this:
                mySweetFile:{
                    name: "FILE_NAME",
                    data: <Buffer 55 22 11 ...>,
                    size: FILE_SIZE,
                    encoding: 7bit,
                    tempFilePath: '',
                    truncated: false,
                    mimetype: 'image/png' OR 'video/mp4' ...,
                    mv: FUNCTION
                }
            */
        })
    ```
    - To save the file in specific path: 
    ```js
            router.post('/upload', (req, res)=>{
            // get the file name:
            let fileName = req.files.mySweetFile.name;
            // you can change the file name but keep the same extension of the original file
            // using mv method:
            req.files.mySweetFile.mv('/Absolute path here../' + fileName, error=>{
                if(error){
                    // error saving the file handler here...
                }else{
                    // success, file was saved
                }
            })
        })
    ```
    - For multiple files, `rea.files` will be an `Array` of file object, then you can make a loop through this array <mark>if the user select more than one file</mark>, If only one file selected, then `req.files.mySweetFile` will be NOT AN ARRAY.
    ```js
        router.post('/upload', (req, res)=>{
            // if multiple files selected, check if req.files.mySweetFile is an array:
            if(Array.isArray(req.files.mySweetFile)){
                // LOOP THROUGH EACH OBJECT HERE
                // each object is a file.
            }else{
                // only one object selected, so req.files.mySweetFile is one object/file
            }
        })
    ```
    - Check a specific file type in server side: We can check if the file is an image or document or any type we need to store, NOT ONLY in frontend side. we do care about `mimetype` in file object, usualy it like this: `mimetype: 'FILE_TYPE/FILE_EXTENSION'`, for example png image file: `mimetype: 'image/png'`
    ```js
        /*
            mySweetFile:{
                name: "FILENAME",
                ...,
                ...
                ...
                mimetype: 'image/png'
            }
        */
        router.post('/upload', (req, res)=>{
            // we do care in this case about "mimetype" attribute in file object,   
            // check ig the first part (mimetype: 'image/png') in mimetype is an image:
            if(req.files.mySweetFile.mimetype.split('/')[0] == 'image'){
                // STORE HERE ..
            }
            // we can check also if the specific file extension is allowed, then we split the value of mimetype with "/", taking the second part, if png or jpg or ...
            // example if only PDF:
            if(req.files.mySweetFile.mimetype.split('/')[1] == 'pdf'){
                // STORE HERE ..
            }
        })
    ```


