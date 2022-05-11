// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// I created an anonymous function expression to split the string into individual letters held in an array
//used the reverse() method on the array of letters to reverse order
//used the join('') method to join the letters with nothing between them
// the return is implicit due to use of an arrow function 
let solution = (string) => string.split('').reverse().join('')