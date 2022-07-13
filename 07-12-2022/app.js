
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.


// parameters: Takes in a positive number up to 500000
// returns: returns the number of divisors of a positive number
// examples: 
    // 4 --> 3 (1, 2, 4)
    // 5 --> 2 (1, 5)
    // 12 --> 6 (1, 2, 3, 4, 6, 12)
// pseudo code

// need to loop through numbers from 0 to the number passed as an argument to the function (using a for loop)
// for (let i = 0; i <= n; i++){

// want to check if the number passed as an argument is divisible by any of the numbers from 0  to the given number.  can check this using a % to see if the quotient is 0 
// if (n % i === 0) {

// if the quotient is 0  it is a divisor.  
// create a variable in the function to count how many divisors  if a number is a divisor add 1 to the counter 
// let countDivisors = 0
// ///////////
// countDivisors += 1

// return the variable when the loop has completed  
// return countDivisors

function getDivisorsCnt(n){
    let countDivisors = 0
    for (let i = 0; i <= n; i++){
      if (n % i === 0) {
        countDivisors += 1
      }
    }
    return countDivisors
  }