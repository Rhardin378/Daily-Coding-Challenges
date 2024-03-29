// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// p: takes in a number greater than or = to 1 
// r: returns an array of numbers representing human years cat years and dog years
// e:  humanYearsCatYearsDogYears(1), [1,15,15])
//     humanYearsCatYearsDogYears(2), [2,24,24]);
//     humanYearsCatYearsDogYears(10), [10,56,64]);
// p: 
// let dog = 24

// let cat = 24

// cat
// year 1 = 15
// year 2 = 24
// each year after +4/yr

// dog
// year 1 = 15
// year 2 = 24

function humanYearsCatYearsDogYears(humanYears){
    let dog = 24

    let cat = 24
      if (humanYears === 1) {
      return [1,15,15]
    } 
    else if (humanYears === 2) {
      return [2, 24, 24]
    } else {
      cat += ((humanYears-2) * 4)
      dog += ((humanYears -2) * 5)  
      return [humanYears, cat, dog]
    }
    }
