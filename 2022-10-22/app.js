// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

    
// Array's length > 2.

// takes an array of array as its parameter

// returns the array in string form with the arrays as a string with a new line after each sub array unless it is the last array which will be a string without \n

// assert.strictEqual(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
//    ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
   
// assert.strictEqual(toCsvText([
//     [ -25, 21, 2, -33, 48 ],
//     [ 30,31,-32,33,-34 ]
//    ] ), '-25,21,2,-33,48\n30,31,-32,33,-34');
   
// assert.strictEqual(toCsvText([
//     [ 5,55,5,5,55 ],
//     [ 6,6,66,23,24 ],
//     [ 666,31,66,33,7 ]
//    ] ), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
// });

// function toCsvText(array) {
//     let string = ''
//       for (let i = 0; i< array.length; i++){
//         if (array[i] is equal to the last element in the array){
//     string += array[i].toString()
//     } else {
//     string += array[i].toString() + '\n'
//     }
//     }
//     return string
//     }


function toCsvText(array) {
    let string = ''
      for (let i = 0; i< array.length; i++){
        if (array[i] === array[array.length-1]){
    string += array[i].toString()
    } else {
    string += array[i].toString() + '\n'
    }
    }
    return string
    }