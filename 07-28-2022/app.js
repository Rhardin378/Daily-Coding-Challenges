

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0







// parameters: 3 non-negative values: beginning num, end num, stepping num 
// returns: the sum of the sequence of integers
// examples: 
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// pseudo code:
//if begin > end return 0 
// want to loop from begin to num summing by each step +=
// storing the num in an array to reduce
// reduce array


const sequenceSum = (begin, end, step) => {
    let array = [] 
    for (let i = begin; i <= end; i+=step) {
      array.push(i)
    }
    return array.reduce((acc,cur)=> acc + cur)
    };