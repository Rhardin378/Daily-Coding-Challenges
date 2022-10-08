All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


P.R.E.P

parameters:
takes an animals name and a dish as arguments
returns: true or false based on if the dish starts and ends with the same letters as the animal's name
example:  
(feast("great blue heron", "garlic naan"), true)
(feast("chickadee", "chocolate cake"), true)
(feast("brown bear", "bear claw"), false))
pseudocode

i need to check if the first leter and last letter of an animals name is the same as the first and last letter of the dish
i can check these values using charAt() if letters are the same return true else false 


function feast(beast, dish) {
    if (beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1)) {
      return true
    } else {
      return false 
    }
    }


