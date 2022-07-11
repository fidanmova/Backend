const fs = require('fs')

const loadView = path=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (error, data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data.toString())
            }
        })
    })
}
 
console.log("dirname for loadFile model",__dirname)

const somthingElse = ()=>{
    return "something Else.."
}

module.exports = {loadView, somthingElse}