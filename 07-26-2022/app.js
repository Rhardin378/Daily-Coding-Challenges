// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// parameters: an integer from 1 to 12  (each integer refers to that month ex: 1 = january )
// returns: returns which quarter of the year the given month is a part of
// examples: 1 => 1 (first quarter) 
//             3 =>  1 (first quarter)
//             6 => 2 (2nd quarter) 

// pseduocode: want to check which months fall into each quarter
// if months 1-3 = 1
// else if months 4-6 = 2
// else if months 7-9 = 3
// else if months 10-12 = 4

const quarterOf = (month) => {
    if (month === 1 || month === 2 || month === 3) {
      return 1
    } else if (month === 4 || month === 5 || month === 6) {
      return 2
    } else if (month === 7 || month === 8 || month === 9) {
      return 3
    } else {
      return 4
    }
    }
