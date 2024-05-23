"use strict";
// Occurs for Union Types
// User-Defined Type Guards
function isFish(pet) {
    return pet.swim !== undefined;
}
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// in operator
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
// typeof
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
