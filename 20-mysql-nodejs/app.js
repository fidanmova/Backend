require('dotenv').config()
const SQL = require('./models/SQL')

// SQL.updateStudentNameById(15, "MOSTAFA").then(result=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)
// })

SQL.getAllStudents().then(students=>{
    console.log(students)
}).catch(error=>{
    console.log(error)
})