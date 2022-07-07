/**
 * my first module
 * what could be a module: 
 * string, number or any data type, function, object
 * note: you must export the data from module, so other file can import it
 */
// 1st way to exports
// a string data
exports.myName = "Md Ariful Islam"
// a number data
exports.age = 32
// export a function with a return text
exports.myFunc = function() {
    return "I am a function from a Module!"
}
// export a object with 2 keys and values
exports.myObj = {
    name: "Arif",
    country: "Bangladesh"
}

// 2nd way to export data
module.exports.method2 = ()=>{
    return 'I am method 2 for exports'
}

