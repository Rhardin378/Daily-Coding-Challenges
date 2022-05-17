
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!



// P.R.E.P.

// parameters 

// the function is taking in an array as a paremeter,  the array will never be empty

// returns 

// returns an array with only every other array element.  the first element will never be removed

// examples

// // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// ['hello', 'dog', 'how', 'kevin', 'are', 'bob', 'you'] --> ['hello', 'how', 'are', 'you']

// pseudocode

// i am going to take an array and remove every other element starting with removing the second element
// I am going to check if an element's index is odd and filter it out since the first item is even and we do not want to remove it 
// use the filter method on the array and check if index % 2 === 0 .  if it returns true i want to keep the element 

function removeEveryOther(arr){
    return arr.filter((element,index)=> {
      if(index % 2 === 0) {
        return element
      }
    })
    }