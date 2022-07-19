

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.




// Parameters: takes in 2 positive inegers not including 0  takes in an integer(base) and a second integer(limit) that is higher than the first Number
// Returns: will return a list of the first integer(base)'s multiples up to the 2nd integer(the limit) 
// Examples:
// 5, 25 => 5, 10, 15, 20, 25
// 3, 20 => 3, 6, 9, 12, 15, 18
// 9, 34 -> 9, 18, 27

// Pseudocode: 
// need an array to store multiples
// const multiples = []
// I am going to need to loop through starting from the integer(base) to the second integer(limit) 
// for (let i = base; i <= limit; i++)
// i only want to include numbers that are multiples multiples can be checked for using the %  
// if (i % base === 0 ){

// }

// if number meets criteria will be pushed into the array named multiples

// if (i % base === 0 ){
// multiples.push(i)
// }

// return the array containing multiples

// return multiples



function findMultiples(integer, limit) {
    const multiples = []
    for (let i = integer; i <= limit; i++){
      if (i % integer === 0) {
        multiples.push(i)
      }
    }
    return multiples
  }