
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// P.R.E.P
// parameter
// any non negative number
// return
// return the positive input number in descending order 
// examples
//     (descendingOrder(1), 1)
//     (descendingOrder(111), 111)
//     (descendingOrder(15), 51)
//     descendingOrder(1021), 2110)
// Pseudocode
// i want to take the number that is given and sort it in descending order
// take the number passed as an argument and convert it to a string using String() split it into an array of number using .split('')  then sort the numbers in descending order using .sort() and then join the numbers back using .join('') 
// turn the string back into a number using Number() and return the answer 


function descendingOrder(n){
    let arr = String(n).split('')
    return Number(arr.sort((a,b)=> b-a).join(''))
  }
  