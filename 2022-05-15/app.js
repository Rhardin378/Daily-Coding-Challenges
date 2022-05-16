// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// p.r.e.p.


//parameters 

//takes an array of integers

//returns 

//returns the smallest integer in the inputted array

//examples 

// [1,4,6] => 1
// [2,5,9,1] => 1

//pseudo code

//I want to sort an array from lowest to highest 
// return the first integer in the array 

class SmallestIntegerFinder {
    findSmallestInt(args) {
        //sort args from lowest to highest and then return the first element seperately using shift()
  return args.sort((a,b)=> a-b).shift()    
  }}
