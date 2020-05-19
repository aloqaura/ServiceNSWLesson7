// Hoisting moves var around, just don't do it

x = 5
console.log(x);
var x;

// Variable Scope is simply the child block of code being able to access variables from the parent block of code, however the parent block of code can't access the variables of the child code.