// const { Code } = require("mongodb")

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.



// Parameters
// takes in an array of numbers or an empty array

// Returns 
// returns a new array without the smallest value of the array .. if multiple of same value first value is removed

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// Pseudo Code
// if an array is empty return an empty array 
// if numbers == [] return []

// else 

// I need to use a method that will make a copy of an array and not mutate it      slice can be used here starting from the 0th index 
// store this array in a variable 

// let array = numbers.slice(0)

// i need to find the smallest number's index in an array
// array.indexOf()
// to check for the smallest number Math.min can be used
// to pass the whole array into Math.min spread the array with ... 
// array.indexOf(Math.min(...numbers),0)  
// 0 after the comma is used to show you are starting from the begining (0) of the array to search for an index

// now that the number is found it can be removed using splice 
// let answer = array.splice(array.indexOf(Math.min(...numbers),0),1)
// the 1 after the comma is used to select only the first element to be deleted




function removeSmallest(numbers) {
    let array = numbers.slice(0)
      let answer = array.splice(array.indexOf(Math.min(...numbers),0),1)
      if (numbers == []){
      return []
    } else {
      return array
    }
    }