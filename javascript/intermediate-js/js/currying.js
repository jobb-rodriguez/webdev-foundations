/* CURRYING: https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable
*/

// REGULAR
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));

// CLOSURE EXAMPLE
function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));

// CURRYING
function calculateVolumeCurrying(length) {
    length *= 2;
    return (breadth) => { // remembers length
        return (height) => { // remembers length and breadth
            return length * breadth * height;
        }
    }
}

let lengthwith4 = calculateVolumeCurrying(4)
let breadthwith5 = lengthwith4(5)

console.log("test 1", lengthwith4(5)(6))
console.log("test 2", breadthwith5(6))

console.log(calculateVolumeCurrying(4)(5)(6));

function max_2 (left, right) {
    return left > right ? left : right
}

function max_3 (left, mid, right) {
    return max_2(left, max_2(mid, right))
}

console.log(max_3(10, 7, 3))
