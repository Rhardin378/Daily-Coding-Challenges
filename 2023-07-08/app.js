// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// p: takes in an array as its parameter ... can also be null or an empty array
// r: returns the array sorted from low to high  .. if it is an empty array or nulll returns "[]"
// e: [4,5,2] => [2,4,5]
    // [1, 2, 10, 50, 5] => [1, 2, 5, 10, 50]
    //   null => []
// p: if nums === null || nums length = 0 return []
// else sort the array from low to high 
// nums.sort((a,b)=> {return a-b} )

      

function solution(nums){
if (nums === null || nums.length === 0) {
  return [];
  } else {
   return nums.sort((a,b) => {return a-b})};
}