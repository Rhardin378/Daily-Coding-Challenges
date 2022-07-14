






// Parameter: takes in a name as a string;  will only have strings Input 
// returns: returns a string that says 'Hello, <person's name>!'  unless the name is john then it should return the string 'Hello, my love!'
// Examples:  greet("Jim"), "Hello, Jim!");
//            greet("Jane"), "Hello, Jane!");
//            greet("Simon"), "Hello, Simon!")
// Pseudocode:  i want to return a string that says hello my love if the name is johnny 
// use a conditional when checking for johnny's name 

// if (name === "Johnny") {
//     return "Hello, my love!"
// }
// if name is not johnny use a template literal to say "hello, ${name}!"

// } else {
//     return `Hello, ${name}!`
//     }


    function greet(name){
    if (name === "Johnny") {
      return "Hello, my love!"
    } else {
      return `Hello, ${name}!`
      }
    }