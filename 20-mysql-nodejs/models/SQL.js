// create comunication to MySQL server,
// methods tobe used outside
// npm mysql

// require mysql
const mysql = require('mysql');

const connectionCongif = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DATABASE,
    multipleStatements: true
} 

let con = null ;

function connect(){
    return new Promise((resolve, reject)=>{
        if(con){
            // check the state
            if(con.state === "disconnected"){
                con.connect(error=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve()
                    }
                })
            }else{
                resolve()
            }
        }else{
            // con is null
            con = mysql.createConnection(connectionCongif)
            con.connect(error=>{
                if(error){
                    reject(error)
                }else{
                    resolve()
                }
            })
        }
    })
}

function sendQuery(query){
    return new Promise((resolve, reject)=>{
        connect().then(()=>{
            con.query(query, (err, result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        }).catch(error=>{
            if(error){
                reject(error)
            }
        })
    })
}

// get all data from students table
function getAllStudents(){
    return new Promise((resolve, reject)=>{
        // call connect to make sure that there is a connection 
        sendQuery(`SELECT name AS 'Student Name', age, info FROM students;SELECT * FROM address;`).then(result=>{
            resolve(result)
        }).catch(error=>{
            reject(error)
        })
    })
}

const updateStudentNameById = (studentId, newName)=>{
    return new Promise((resolve, reject)=>{
        sendQuery(`UPDATE students SET name = '${newName}' WHERE id = ${studentId};`).then(result=>{
            resolve(result)
        }).catch(error=>{
            reject(error)
        })
    })
} 



module.exports = {getAllStudents, updateStudentNameById}