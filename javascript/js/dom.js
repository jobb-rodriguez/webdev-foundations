// DOM Selectors
// console.log("Tag:", document.getElementsByTagName("h1"));
// console.log("Id:", document.getElementById("first").textContent);
// console.log("Class:", document.getElementsByClassName("italic"));


// console.log("Query Selector:", document.querySelector("#first"));
// console.log("First .italic:", document.querySelector(".italic"));
// console.log("All .italic:", document.querySelectorAll(".italic"));
// console.log("All <li>:", document.querySelectorAll("li"));

// console.log(document.querySelector("p").getAttribute('id'));
// document.querySelector("p").setAttribute('class', 'italic');
// console.log("Query Selector All:", document.querySelectorAll(".italic"));

// // querySelector.style.property = value
// document.querySelector("body").style.background = "#00308F";

// console.log("Class List of first .italic:", document.querySelector(".italic").classList);
// document.querySelector(".italic").classList.add("bold");
// console.log("Class List of first .italic:", document.querySelector(".italic").classList);

// document.querySelectorAll(".italic")[1].classList.remove("italic");

// console.log(document.querySelectorAll("li")[0].parentElement);
// console.log(document.querySelector("ul").children[0]);

// DOM Events
const shoppingList = ["Eggs", "Bueno", "Coke", "Mayonnaise"]

const addItemButton = document.getElementById("addItem");
const masterList = document.querySelector("ul");
/* 
selector.addEventListener("event", () => {
    action
})
*/
addItemButton.addEventListener("click", () => {
    if(shoppingList.length === 1) {
        addItemButton.setAttribute('disabled', 'true');
        addItemButton.textContent = "No more item to add";
    }
    /*
        <ul>
            ...
            <li>Eggs</li>
        </ul>
        item = "Eggs"
        shoppingList = ["Bueno", "Coke", "Mayonnaise"]
    */
    const li = document.createElement("li");
    // first item in the array
    const item = shoppingList[0];
    shoppingList.shift();
    li.appendChild(document.createTextNode(item));

    masterList.appendChild(li);
});