// Build a function that returns an array of integers from n to 1 where n>0.

p.r.e.p.

Parameters 
function takes in a number greater than 0 as its argument

returns
the function will return an array counting down from n to 1

examples

reverseSeq(5)  =>   [5,4,3,2,1]
reverseSeq(6)   =>   [6,5,4,3,2,1]
reverseSeq(9) =>   [9,8,7,65,4,3,2,1]

pseudocode
make an empty array to store the array of integers
make a loop that counts down from n to 1 
each iteration of the loop push i into the array and i-- while i > 0 




const reverseSeq = n => {
    arr =[];
      for (let i = n; i>0; i--) {
      arr.push(i);
    }
      return arr
    };