// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

p: takes in an array of numbers 
r: returns the sum of the numbers in array numbers squared
e:
(squareSum([1,2]), 5);
squareSum([0, 3, 4, 5]), 50);
squareSum([]), 0)
p: 
if an array is empty squared and added it will = zero
a conditional can be used to cover this test case

if (numbers.length === 0){
    return 0
} else {
in order to square all numbers in an array I need to use a method to change them
.map() can be used to square the numbers like so: 
numbers.map((element)=> element**2)
the array then needs to be added  the reduce function can be used
.reduce((acc, curr)=> acc + curr)
}

function squareSum(numbers){
    if (numbers.length === 0){
      return 0
    } else {
  return numbers.map((element)=> element**2).reduce((acc, curr)=> acc + curr)
  }
  }