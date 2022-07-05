/**
 * Create a function that takes an array of numbers and returns the average
 * average(array): number
 * 
 * ex average([1, 2, 3, 4, 5]) // 3
 */

/**
 * This Function Calculate The Average
 * @param {Array} arr  as an array
 * @returns {Number} The average
 */
function average(arr){
    // check if arr is an array
    if(Array.isArray(arr)){
        let sum = 0;
        let length = arr.length
        arr.forEach(item=>{
            let itemAsNumber = parseFloat(item)
            if(!Number.isNaN(typeof itemAsNumber)){
                //sum = sum + item;
                sum += itemAsNumber
            }else{
                //length = length - 1
                length --
            }
        })
        return sum / length
    }else{
        console.log("Data type exception ")
        return 0
    }
}

// let myArray = [1, 2, 3, 4, 5, "Hi"]
let myArray = process.argv.slice(2)
let avr = average(myArray)
console.log(avr)

// process.argv
// console.log(process.argv)
console.log(process.argv.slice(2))