// reduce() - reduce array to a single value

let array = [10, 20, 30, 40, 50]
let arrayR = array.reduce((acc, val) => {
    return acc + val
}, 0)    // 0 is value of start to acc

console.log(arrayR)