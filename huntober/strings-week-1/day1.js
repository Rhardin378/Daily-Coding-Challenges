🏆 The Challenge - Day 1
This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


COPY

COPY
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:


COPY

COPY
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done!


'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'

check for a value 
    if the the value is 0 replace it with 'O'

    for (let i = 0; i < message.length; i++) {
        if (message.indexOf(i) == '0') {
           string = message.replace('0', 'O')
        } else {
            continue
        }


function secretStringChecker(message) {
let string = message.split('')
    for (let i = 0; i < string.length; i++) {
    if (string[i] == '0') {
       string.splice(string[i],1,'O')
    } else {
        continue
    }
}
console.log(string)
      }


