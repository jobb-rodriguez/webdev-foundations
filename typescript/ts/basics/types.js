// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
// Array
var pets = ["cat", "dog"];
var pets2 = ["cat", "mouse"];
// Objects
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var no = null;
// tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2]; // displays Medium
var sizeNameNum = Size["Small"]; // displays 1
var Section;
(function (Section) {
    Section["News"] = "News";
    Section["VoxAteneo"] = "Vox Ateneo";
})(Section || (Section = {}));
;
var section = Section["VoxAteneo"];
// Any - be careful
var whatever = "whatver";
whatever = 5;
// void - useful for functions
var sing = function () {
    console.log("lalalala");
};
// never - never returning anything and never true
var error = function () {
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
// type assertion
var dog = {};
console.log(dog.count);
// Function - has return types
var product = function (a, b) {
    return a * b;
};
// Union
var confused = "hello";
confused = 5;
