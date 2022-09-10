// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

p: takes in 2 seperate arrays.  each array contains integer niumbers 
r: returns the sum of each array added together  
e: [1,2,3], [4,4,2] => 16 
   [3,4], [33,9] => 49
   [44,32], [99,1] => 176
p: in order to add the arrays i need to combine both arrays
I can do this by concatting the arrays 
arr1.concat(arr2)
once both arrays have been joined a sum can be found by using the reduce function
arr1.concat(arr2).reduce((acc,cur)=> acc + cur)



const arrayPlusArray = (arr1,arr2) => arr1.concat(arr2).reduce((acc,cur)=> acc + cur)
