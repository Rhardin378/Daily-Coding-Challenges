// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// p: takes in an array of strings 
// r: returns a single string that has each letter seperated by ***
// e: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// (["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
// p:

// s.sort()
// s.sort()[0] first index
// .split('').join('***')

function twoSort(s) {
    const sorted = s.sort()
    return sorted[0].split('').join('***')  
      
    }