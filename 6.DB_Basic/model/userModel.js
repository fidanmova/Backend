/**
 * Database object Model(M) mapping
 * example:
 * js oject
 * user = {
 *  // key: Type of the data
 *  first_name: "Arif", // String
 *  last_name: "Arif", // String
 *  age: 32 // Number
 * }
 */

// Step 01: import or call mongoose Schema object
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const Schema = require('mongoose').Schema;

// Step 02: Create schema
// User Schema structure: new Schema(Object Map)
const userSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    country: String,
    gender: Boolean, 
    address: String,
    zipcode: Number
})

// Step 03: Declare the schema as a Model and export it
const User = mongoose.model('User', userSchema)
module.exports = User;