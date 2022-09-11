// // Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// p: takes in an array of numbers arr1 and a number (divisor) 
// r: returns an array of only the numbers in arr1 that are divisible by divisor
// e:     divisibleBy([1,2,3,4,5,6], 2), [2,4,6];
//        divisibleBy([1,2,3,4,5,6], 3), [3,6];
//        divisibleBy([0,1,2,3,4,5,6], 4), [0,4]
//        divisibleBy([0], 4), [0]
// p: create an empty array to store results 
// const results = []
// create an array that shows only numbers in arr1 that are divisible by divisor  can use map to mutate array based on if arr1 % divisor === 0 
// if divisible push the element into the results array to be returned 
// numbers.map((element)=> {
//     if (element % divisor === 0) {
//       results.push(element)
//     }})
//  then return the results array 

//  return results

function divisibleBy(numbers, divisor){
    const results = []
    numbers.map((element)=> {
    if (element % divisor === 0) {
      results.push(element)
    }})
    return results
    }