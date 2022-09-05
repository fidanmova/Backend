const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    // host: "smtp.mail.yahoo.com",
    // port: 465,
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  /**
   * This function will send the email.
   * @param {String} mailTo 
   * @param {String} subject 
   * @param {String} message 
   * @returns 
   */
  const send = (mailTo, subject, message)=>{
    return new Promise((resolve, reject)=>{
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            // to: `${req.body.email}, anotherWother.other`, Multiple emails
            to: mailTo,
            subject: subject,
            // text: req.body.message,
            html: message
          }).then(info=>{
            resolve(info)
          }).catch(error=>{
            reject(error)
          })
    })
  }

  module.exports = {
    send
  }