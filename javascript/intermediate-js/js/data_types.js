
// const let you set constant variables
// constant variables have constant values
const isTrue = true;
// isTrue = false; // this will return an error since you cannot update the values of constant variables

// let
// def: The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let x = 1;
// let x = 2; // -> causes an error (let declarations cannot be redeclared by any other declaration in the same scope.)
// x = 3; // reassign the variable instead of redeclaring

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

// var
var y = 1;
var y = 2; // unlike in let, redeclaring does not cause an error

if (y === 2) {
  var y = 3;

  console.log(y);
}

console.log(y);

/* NOTES
1. Use const when you can, and use let when you have to.
2. The creators recommend using let over var since let was created to fix issues from var.
*/