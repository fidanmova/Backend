function foo(n){
    for(let j = 0; j < n; j++){
        for(let i = 0; i< j; i++){
            let b = i + j * 20
        }
    }
}

// example to measure processing time
console.time("foo_time")
foo(100000)
console.timeEnd("foo_time")

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.question("How Old Are You?\n", age=>{
//         console.log(`Your age is ${age} years old`)
//         readline.close();
//       })
//   });
