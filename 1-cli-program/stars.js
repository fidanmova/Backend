/**
 * Create a CLI program, accept three arguments from begining, :
 * row, column, char
 * node stars.js 4 3 '*'
 *          *   *   *
 *          *   *   *
 *          *   *   *
 *          *   *   *
 * hint:
 * let s = "*\t*\t*\n*\t*\t*\n*\t*\t*\n"//==>
 * *    *   *
 * *    *   *
 * *    *   *
 * bunos:
 *      make the edges characters in a differnt color
 */
let args = process.argv.slice(2)
let row = parseInt(args[0])//
let col = parseInt(args[1])
let char = args[2]
console.log(row, col, char)

function createStars(row, col, chr){
    let s = ""
    for(let j = 0; j < row; j++){
        for(let i = 0; i < col; i++){
            if(j === 0 || j == row -1 || i == 0  || i === col -1){
            // if(j > row/2){
                s += "\x1b[31m" + chr + "\x1b[0m\t" 
            }else{
                s += chr + "\t" 
            }
        }
        s += "\n"
    }
    return s
}

console.log(createStars(row, col, char))