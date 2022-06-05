// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// P.R.E.P.

// Parameters
// only accepts strings

// returns a string with - connecting words instead of .

// Examples
// ('cat.hat.sat') =>  'cat-hat-sat'
// ('i.love.you') => 'i-love-you'
// ('I.love.javaScript) => 'I-love-javaScript'

// PseudoCode
// I want to seperate the words in the string by the periods using a split() method
//str.split('.')
// I want to then rejoin the string connecting the words with - using the join() method
// str.join('-')

function replaceDots(str) {
    return str.split('.').join('-')
}
