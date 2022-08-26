
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.





// Parameters: 
// takes in a string of two words with one space in between them
// returns: two capital letters with a dot seperating them ...      (returns the first and last initial of the name being passed with a dot joining them) 
// examples: // Sam Harris => S.H
// // patrick feeney => P.F
// //ryan hardin => r.h
// pseudocode:
// seperate the first and last name into seperate strings and store them in seperate variables

// const fName = name.split(' ')[0]
// const lName = name.split(' ')[1]
// return the first name variable's first letter  + '.' +  the last name variable's first letter
// return fName[0] + '.' + lName[0]

function abbrevName(name){
    const fName = name.split(' ')[0]
    const lName = name.split(' ')[1]
    return fName[0] + '.' + lName[0]
    }

