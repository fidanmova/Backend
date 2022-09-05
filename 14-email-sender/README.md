# install express-generator Globaly
```sh
sudo npm i -g express-generator
```

## quick create express-application
```sh
express --view=ejs
npm i
```
<hr>

# Email Sender In Expressjs

> A lot of packages in `npm` help us to send an email in `nodejs express application`, the most easiest one is [Nodemailer](https://www.npmjs.com/package/nodemailer).

## Setting Email secure access:
> Before start using `nodemailer`, some setting we have to change in our own email account:
### 1. For Gmail:
Make sure to change the default setting `Less secure app access`, it is by default `off`, to make it `on`, go to gmail setting `https://myaccount.google.com/lesssecureapps` and turn it on.  
**Note: This setting is not available for accounts with 2-Step Verification enabled.** so you have to disable with `2-Step Verification` first.

### 2. For Yahoo
You can create an `application password` in your yahoo account with password to use it. 
Sign in to your `yahoo` account, then refer to `Account Info > Account Security`, or  (`https://login.yahoo.com/myaccount/security/`) then you can find `Generate app password`, give a name for this application and copy the password and click `Done`. **This choice is available even if you have two-step authentication enforced**.

## Start using `Nodemailer` in application:
### 1. Store Email credits in `.env` File:
> This step is very important, because you will store in this file the email account and the password, it's not secure to put the email credits in the code, think about if you upload the application in github or share it with others...<br>
**DON'T SHARE THIS FILE WITH ANYBODY**<br>

In `.env` file:

```sh
# chose any variable name for email user account, ex:
EMAIL_USER=<YOUR_EMAIL_ACCOUNT>
# chose any variable name for email password account
# for Gmail ex:
EMAIL_PASSWORD=<YOUR_GMAIL_ACCOUNT_PASSWORD>
# for yahoo ex:
EMAIL_PASSWORD=<YOUR_APPLICATION_PASSWORD>
```

### 2. It's Recommended to create a model file to use it anywhere in application
> In root op application, create `models` folder, then inside it, create a file `Email.js`<br>
In this file: require the `nodemailer` package:
```js
    const nodemailer = require("nodemailer");
```
> Then, define the `transporter` and configuration:
```js
let transporter = nodemailer.createTransport({
  /* (Simple Mail Transfer Protocol): smtp-host: for the email service server, you can find it in google search */
  /* example for gmail host */
  host: "smtp.gmail.com",
  /* port: for the email service server, you can find it in google search */
  /* example for gmail port */
  port: 25, 465, or 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});
```
As a short for `Yahoo` Or `Gmail`, we can remove `host & port`, easily we can define the `transporter` with option `service: 'gmail' OR 'yahoo'` like this: 
```js
let transporter = nodemailer.createTransport({
    // for gmail:
  service: 'gmail',
  // or for yahoo: 
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});
```

Then, create a procedure `send`, we can deploy this procedure, to accept arguments like `name, subject, toEmail, message`, so we can use it anywhere, **Note, This procedure will take a time to send the email, so  we have to use** (async/await OR callback OR Promise). EX Promise:
```js
    const send = (subject, toEmail, message)=>{
        return new Promise((resolve, reject)=>{
            // sendMail method in transporter can be called, it's a promise function!
            transporter.sendMail({
                // same account email address
                from: process.env.EMAIL_USER,
                to: toEmail, // from argument.
                subject: subject, // from argument.
                text OR html: message // from argument.
            }).then(result=>{
                // success
                resolve(result)
            }).catch(error=>{
                // error from nodemailer
                reject(error)
            })
        })
    }
```
> After that, export this procedure
```js
    module.exports = {
        send
    }
```
> Then, We can use this function anywhere in our application, only `(subject, toEmail, message)` are required.

### Example to use `send` method:
> In router or controller file we can import this model and use it
```js
    const {send} = require('../models/Email');

    router.post('/send', (req, res)=>{
        // in post request, use req.body
        send(req.body.subject, req.body.email, req.body.message).then(result=>{
            // success, message was sent
            res.json({success: true})
        }).catch(error=>{
            // error, there was an error sending email
            res.json(error)
        })
    })
```






