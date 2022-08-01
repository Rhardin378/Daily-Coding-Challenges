// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


    // paremter: takes in a string of lowercase letters and/or spaces
    // /returns the number of vowels in the string
    // examples: 
    // 'abracadabra' => 5 
    // 'dfawefiu' => 4
    // 'frpgzpo' => 1
    // pseudocode:
    // want to loop through the string
    // can loop through by splitting the string into an array with .split('') and using a forEach loop 
    // will need to create an empty array to store vowels to be counted from the string  
    // want to check if the letter is a vowel using a conditional if element === 'a' || 'e' || 'i' || 'o' || 'u'
    // if the letter is a vowel push into the empty array
    // return the array of vowels length

    function getCount(str) {
        const vowels = []
        str.split('').forEach((element)=>{
          if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            vowels.push(element)
          }
        })
          return vowels.length
          }