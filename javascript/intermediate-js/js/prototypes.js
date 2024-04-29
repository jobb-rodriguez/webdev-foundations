// view values in browser's console.log
console.log(Array.prototype);
console.log(Object.prototype);
console.log(Date.prototype);

// Shadowing Properties - overwriting prototype's functions
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

