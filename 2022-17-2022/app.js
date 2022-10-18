
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50


// takes in a number as a parameter
// returns a multiplication table 

// example : 1 * 5 = 5
// 2 * 5 = 10\n
// 3 * 5 = 15\n
// 4 * 5 = 20\n
// 5 * 5 = 25\n
// 6 * 5 = 30\n
// 7 * 5 = 35\n
// 8 * 5 = 40\n
// 9 * 5 = 45\n
// 10 * 5 = 50

// table = ' '
// for (let i = 1; i <=10; i++) {
//     if i == 10 {
//         table += `${i} `+ '*' + ` ${number} ` + '=' + ` ${i * number}`
//     }
//     table += `${i} `+ '*' + ` ${number} ` + '=' + ` ${i * number}` + '\n'
// }


function multiTable(number) {
    let table = ''
      for (let i = 1; i <= 10; i++) {
    if (i == 10) {
      table += `${i} `+ '*' + ` ${number} ` + '=' + ` ${i * number}`
    } else {
        table += `${i} `+ '*' + ` ${number} ` + '=' + ` ${i * number}` + '\n'
    }}
    return table
    }