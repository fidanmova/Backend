const mongoose = require('mongoose')
const User = require('./models/Users')

mongoose.connect('mongodb://localhost:27017/test', error=>{
    if(error) throw error
    console.log('Connected to database!')
})

// insert 
let u = new User({
    name: "John",
    email: "abcasasdssdasas@abc.abc",
    password: "123456",
    age: 28,
    // gender: "male",
    phone: "02545656464651",
    address:{
        country: "Germany",
        city: "Hamburg",
        street: "Hauptstrasse",
    },
    hobbies: [
       "Walking",
        "Reading"
    ]
})
// u.save(error=>{
//     error?console.log(error.message): console.log("Insert Done!")
// })

// User.find({}).then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

User.updateOne({email: "abcasasdasas@abc.abc"}, {$set:{age: 600}},{
    runValidators: true
}).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error.message)
})

// User.findOneAndUpdate({_id: "630cc5a9b8e128eca57d3e86"}, {$set:{'address.city': "Berlin"}}, {
//     runValidators: true
// }).then(result=>{
//         console.log(result)
//     }).catch(error=>{
//         console.log(error)
//     })

