// KEYOF
type Point = { x: number; y: number };
type P = keyof Point; // type P = "x" | "y";

const point: Point = { x: 10, y: 20 };
let pointKey: P;

pointKey = "x"; // Valid
pointKey = "y"; // Valid
// key = "z"; // Error: Type '"z"' is not assignable to type '"x" | "y"'.

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A = number

const arrayish: Arrayish = { 0: "zero", 1: "one" };
let arrayishKey: A;

arrayishKey = 0; // Valid
arrayishKey = 1; // Valid
// arrayishKey = "a"; // Error: Type '"a"' is not assignable to type 'number'.
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number

const mapish: Mapish = { "a": true, "b": false };
let mapishKey: M;

mapishKey = "a"; // Valid
mapishKey = "b"; // Valid
mapishKey = 0; // Valid (because numbers are valid keys for string index signature in JavaScript)
// mapishKey = true; // Error: Type 'true' is not assignable to type 'string | number'.

// TYPEOF
// Prints "string"
console.log(typeof "Hello world");

let s = "hello";
let n: typeof s; // let n: string

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // type K = boolean

function f() {
    return { x: 10, y: 3 };
  }
type F = ReturnType<typeof f>; // type + = { x: number, y: number };