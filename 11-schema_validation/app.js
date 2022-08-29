const mongoose = require('mongoose')
const Users = require('./model/Users')

// connetct to MongoDb
mongoose.connect('mongodb://localhost:27017/test', error=>{
    if(error) throw error
    console.log('Connected to MongoDb')
})

let mostafa = {
    name: 'Arif',
    age: 20,
    married: true,
    email: 'abcd@efabcdefa.def',
    address: {
         country: 'USA',
        city: "New Yourk",
        zipCode: 52525
    },
    birthDate: new Date(),
    hobbies: ["guitar", 'programming'],
    skill: 'C#'
}
///////////////////////// INSERT
const user1 = new Users(mostafa)
// user1.save().then(()=>{
//     console.log('a new user added')
// }).catch(error=>{
//     console.log(error.message)
// })
user1.save(error=>{
    if(error){
        console.log(error.message)
    }else{
        console.log('a new user added')
    }
})

// Users.create(mostafa).then(()=>{
//     console.log('a new user added')
// }).catch(error=>{
//     console.log(error.message)
// })


/////////////////////////// FIND/GET

Users.find().then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error.message)
})



