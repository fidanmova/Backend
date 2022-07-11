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

const somthingElse = ()=>{
    return "something Else.."
}

module.exports = {loadView, somthingElse}