// Occurs for Union Types

// User-Defined Type Guards
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// in operator
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
      return pet.swim();
    }
    return pet.fly();
  }

// typeof
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}