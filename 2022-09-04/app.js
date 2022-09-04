You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.




P: takes in  an array of (a) and a value of (x) 
r: returns true if the array (a) contains value (x)
e: ([44,99, 30], 44) => false 
([101, 45, 75, 105, 99, 107], 107) =>  true
(['t', 'e', 's', 't'], 'e') => true
(['what', 'a', 'great', 'kata'], 'kat') => false







const check = (a,x) => a.includes(x) ? true : false
