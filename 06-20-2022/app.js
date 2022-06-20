// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false

// PREP
// Parameters: takes in crew and draft (arguments passed as parameters can only be numbers)
// Return: returns true or false when calling the method isWorthIt() based on if the weight of the draft without crew is over 20 or not 
// Examples: 
// const titanic = new Ship(10, 15)   
// titanic.isWorthIt() => false 
// const cruiseShip = new Ship(40, 4)  
// cruiseShip.isWorthIt() => true
// const blackPearl = new Ship(1000, 7)
// blackPearl.isWorthIt() => true 
// Pseudocude:
// create a class of Ship with a constructor with the parameters:  draft and crew 
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }
// create a method isWorthIt that returns true or false based on if the weight of the draft without crew is over 20 or not 
isWorthit() {
// get the weight of the crew x 1.5 
const crewWeight = this.crew * 1.5
// subtract crew weight from draft ..... if the remaining weight is over 20 return true otherwise false 
if (this.draft - crewWeight > 20) {
    return true
  }
    else {
      return false
    }
  }
}


