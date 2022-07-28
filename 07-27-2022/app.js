// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // Return your answer as a number.

// paremeter: will take an array of numbers some as number values and some as strings 
// Returns: returns the sum of the array values as if all values are numbers 
// examples: sumMix([9, 3, '7', '3']), 22);
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// pseudocode: 
// i want to make sure that every value has a type of number 
// i can change this by mapping map() the array values to be a number with Number()
// x.map(element=> Number(element))
// i can then sum the array of numbers by reducing 
// .reduce((acc, curr)=> acc+ curr)


function sumMix(x){
    return x.map(element=> Number(element)).reduce((acc, curr)=> acc+ curr)
    }