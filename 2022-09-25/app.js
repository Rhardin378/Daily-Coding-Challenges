// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:



// parameter
// takes in an array as an argument 
// return 
// returns the index of the string 'needle' in a string that says "found the needle at position${indexOf needle}"

// examples: 
// [3234, "hay",  "needle"] => "found the needle at position 2"
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// ['hello', 'needs', 'wants', 'needle']=> "found the needle at position 3"

// pseudocode

// the index of 'needle' needs to be found and returned within the string 
// "found the needle at position ${indexof needle} "
// the index can be found using .indexOf('needle',0)
// return the string using backticks so the index can be shown within a template literal  `found the needle at position ${haystack.indexOf('needle', 0)}`

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle', 0)}`
  }