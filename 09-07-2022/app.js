// Given a non-empty array of integers, return the result of multiplying the values together in order



// p: takes in an array of integers
// r: returns all of the numbers multiplied in order from left to right 
// e: [1,2,3] => 6
//    [4,1,2] => 8
//    [4,3,1] => 12
// p: multiply the numbers together from left to right
//   the array method reduce can be used to multiply from left to right
// array.reduce((acc,cur) => acc*cur)

const grow = (x) => x.reduce((acc,cur)=> acc*cur)