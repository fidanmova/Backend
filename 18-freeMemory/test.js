// get free memory Random Access Memory (RAM)
const os  = require('os')

let freeMem = os.freemem()
let totalMem = os.totalmem()
let usedMem = totalMem - freeMem
console.log(freeMem)
console.log(totalMem)

// Persentage value for used memory (0, 100)%
let pesentageValueUsedMem = Math.floor(usedMem *100 /totalMem)
let pesentageValueFreeMem = Math.floor(freeMem *100 /totalMem)
console.log(pesentageValueUsedMem, pesentageValueFreeMem)