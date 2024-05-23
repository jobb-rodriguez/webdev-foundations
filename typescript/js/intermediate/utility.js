"use strict";
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
const obj = { a: 5 };
const obj2 = { a: 5 };
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
// const cats: Record<CatName, CatInfo>
