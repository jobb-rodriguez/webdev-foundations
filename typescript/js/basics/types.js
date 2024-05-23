"use strict";
// boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = "brown";
// Array
let pets = ["cat", "dog"];
let pets2 = ["cat", "mouse"];
// Objects
let wizard = {
    a: "John"
};
// null and undefined
let meh = undefined;
let no = null;
// tuple
let basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let sizeName = Size[2]; // displays Medium
var Section;
(function (Section) {
    Section["News"] = "News";
    Section["VoxAteneo"] = "Vox Ateneo";
})(Section || (Section = {}));
;
let section = Section["VoxAteneo"];
// Any - be careful
let whatever = "whatver";
whatever = 5;
// void - useful for functions
let sing = () => {
    console.log("lalalala");
};
// never - never returning anything and never true
let error = () => {
    throw Error("oops");
};
let fightRobotArmy = (robots) => {
    console.log("Fight!");
};
// type assertion
let dog = {};
console.log(dog.count);
// Function - has return types
let product = (a, b) => {
    return a * b;
};
// Union
let confused = "hello";
confused = 5;
