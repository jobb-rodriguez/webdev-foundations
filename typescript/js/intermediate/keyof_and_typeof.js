"use strict";
const point = { x: 10, y: 20 };
let pointKey;
pointKey = "x"; // Valid
pointKey = "y"; // Valid
const arrayish = { 0: "zero", 1: "one" };
let arrayishKey;
arrayishKey = 0; // Valid
arrayishKey = 1; // Valid
const mapish = { "a": true, "b": false };
let mapishKey;
mapishKey = "a"; // Valid
mapishKey = "b"; // Valid
mapishKey = 0; // Valid (because numbers are valid keys for string index signature in JavaScript)
// mapishKey = true; // Error: Type 'true' is not assignable to type 'string | number'.
// TYPEOF
// Prints "string"
console.log(typeof "Hello world");
let s = "hello";
let n; // let n: string
function f() {
    return { x: 10, y: 3 };
}
