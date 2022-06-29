
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.



// takes in 2 paramaters:  a base number will be a non-negative and a factor number will be a positive number 

// returns true or false
// true if factor will go into the base evenly (no remainder)
// false if it has a remainded

// ex: 
// (6, 2) => true
// (8, 3) => false
// (25, 5) => true

// want to test if dividing a numbers factor by its base will have a remainder
// take the base number and divide it by the factor using modulus (to check for a remainder)  if the remainder is 0 return true 

function checkForFactor(base, factor) {
    if (base % factor === 0) {
        return true
    } else {
        return false
    }
} 

// changed the code to be cleaned by using an arrow function expression (better practice with es6) 


const checkForFactor = (base, factor) => base % factor === 0 