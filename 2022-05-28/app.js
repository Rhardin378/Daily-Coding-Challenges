const setAlarm = (employed, vacation) => employed=== true && vacation === false ? true : false


// parameters are employed and vacation
//return true if employed && not on vacation
//examples
//     setAlarm(true, true),  false,"Should be false.");
//     setAlarm(false,true),  false, "Should be false.");
//     setAlarm(true, false), true,"Should be true.");
//pseudocode
// if employed and not on vacation return true
// else return false
