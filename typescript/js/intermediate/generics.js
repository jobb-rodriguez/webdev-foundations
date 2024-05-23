"use strict";
function identity(arg) {
    return arg;
}
// explicit
let outputString = identity("myString");
let outputNumber = identity(9);
// type inference
let outputStringInference = identity("myString");
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
let codeLogger = loggingIdentity([1, 2, 3]);
let reportLogger = loggingIdentity(["CRITICAL", "CRITICAL"]);
let myIdentity = identity;
