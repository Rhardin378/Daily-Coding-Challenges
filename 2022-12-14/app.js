// P: takes in a string of letters both capital letters and lowercase 
// R: returns a string lof letters connected by "-"
// E: accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// P:
// seperate the letters in the string 

// repeat each letter of the string the same number of times as its position in string 

// the first letter in a series of same letters needs to be capitilized  and the following letters lowercased for each letter

// rejoin the string with "-" to join the letters in the string 
function accum(string) {
    let seperatedLetters = []
    let finalAnswer = ''
    let counter = 0
    
      let letterArray = string.split('')
      letterArray.forEach((letter)=>{
          counter++
          let repeated =letter.repeat(counter)
      seperatedLetters.push(repeated)
      
      })
    seperatedLetters.forEach((letter)=>{
    finalAnswer+=(letter[0].toUpperCase()+ letter.slice(1).toLowerCase())+'-'
    
    })
    return finalAnswer.slice(0,finalAnswer.length-1)
    }