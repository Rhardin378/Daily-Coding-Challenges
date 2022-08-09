// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null


//Parameters: takes in an array of numbers or an empty array 
//returns: returns the last element in the passed in array  or null if the array is empty
//examples: last([])=> null
// last([1,2,3]) => 3
// last([4,5,2]) => 2
//pseudo code:
// i want to check for the last number in the array
// this can be done by checking the last index of the passed in array xs[xs.length - 1] 
// if the array is empty it will have a length of 0 test this using xs.length i can then make 
// a conditional  to check  and return null if it is 0 
// xs.length == 0 ? null
// else        : return xs[xs.length - 1]
const last = xs => xs.length == 0 ? null : xs[xs.length-1] 
