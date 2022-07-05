// this function is called when the page is loaded
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if(i === 5){
        console.log("\x1b[41m ERROR in Line 9\x1b[0m");
    }
  }
  return max;
}

let myArray = [1, 2, 3, "Mostafa", 5, 6, 7, 8, 9, 10];
// debugger
let max = findMax(myArray);

console.log(max)

