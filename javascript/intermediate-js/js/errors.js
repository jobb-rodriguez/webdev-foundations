// List of Errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
// Errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors
try {
    throw new Error("Whoops!");
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}
  
// Omitting options
const error1 = new Error("Error message");
console.log("cause"); // cause

// Passing a primitive value
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// Passing an object without a cause property
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
