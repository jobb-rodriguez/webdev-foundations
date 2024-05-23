"use strict";
function createLabel(idOrName) {
    throw "unimplemented";
}
let a = createLabel("typescript"); // let a: NameLabel
let b = createLabel(2.8); // let b: IdLabel
let c = createLabel(Math.random() ? "hello" : 42); // let c: NameLabel | IdLabel
