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
            // check if item after parsing is not NaN
            // typeof NaN is "number" :( 
            if(!Number.isNaN(itemAsNumber)){
                //sum = sum + item;
                sum += itemAsNumber
            }else{
                //length = length - 1
                length --
            }
        })
        if(length>0){
            return sum / length
        }else{
            return 0 
        }
    }else{
        console.log("Data type exception ")
        return 0
    }
}

// let myArray = [1, 2, 3, 4, 5, "Hi"]
// process.argv
// console.log(process.argv)
// console.log(process.argv.slice(2))
let myArray = process.argv.slice(2)
// process.argv ===> string always
let avr = average(myArray)
console.log(avr)
 /**
  * Create another Function sum so that:
  * node average.js sum 1 2 3 4 5 ===> 15 
  * node average.js avr 1 2 3 4 5 ===> 3
  * and let the user select which function need to be executed
 */
