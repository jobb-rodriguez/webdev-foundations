// Setup - add the script to HTML

// Variables
console.log("---VARIABLES---")
const num = 2;
var num2 = 1;
for (let i = 0; i < 4; i++) {
    console.log(i, num, num2 + 1);
}

// Variable Types
console.log("---VARIABLE TYPES---");
const name = 'Anthony';
const age = 26;
const isMale = true;
const chosenCareer = undefined;
const bankAccount = null;

console.log(`name: ${name} is a ${typeof(name)}.`);
console.log(`age: ${age} is a ${typeof(age)}.`);
console.log(`isMale: ${isMale} is a ${typeof(isMale)}.`);
console.log(`chosenCareer: ${chosenCareer} is a ${typeof(chosenCareer)}.`);
console.log(`bankAccount: ${bankAccount} is a ${typeof(bankAccount)}.`);


// Control Flow
console.log("---CONTROL FLOW---");
console.log('Comparison Operators: ===, !==, >, >=, <, <=');
console.log("Logcial Operators: &&, ||, !; and, or, not");

if(age < 13) console.log("Pre-teen");
else if (age >= 13 && age <= 17) {
    console.log('Teen')
} else {
    console.log("Post-teen")
}

const favoriteMeal = 2;
switch(favoriteMeal) {
    case 1:
        console.log(`${name}'s favorite meal is Hotsilog.`);
        break;
    case 2:
        console.log(`${name}'s favorite meal is Burger and Fries.`);
        break;
    default:
        console.log(`${name} is happy to eat any meal with meat.`)
}

/* var enemyHP = 5;
for(enemyHP; enemyHP != 0; enemyHP--){
    var response = undefined;
    alert(`You have ${enemyHP} Health Points remaining.`);
    if(enemyHP === 3) {
        do {
            response = prompt("We know how this will end. Are you not going to give up? (Y/N)");
        } while(response !==  "Y" && response !== "N");
    } else if (enemyHP === 1) {
        do {
            response = undefined;
            response = prompt("I don't want to do this. Have you made up your mind? (Y/N)");
        } while(response !==  "Y" && response !== "N");
        if (response === "N") console.log("Reposte in pace");
    }

    if(response === "N") {
        alert("It's good that you regained your senses.");
        break;
    }
}*/

/* While Variant */
/* enemyHP = 5;
while(enemyHP !== 0) {
    var response = undefined;
    alert(`You have ${enemyHP} Health Points remaining.`);
    if(enemyHP === 3) {
        do {
            response = prompt("We know how this will end. Are you not going to give up? (Y/N)");
        } while(response !==  "Y" && response !== "N");
    } else if (enemyHP === 1) {
        do {
            response = undefined;
            response = prompt("I don't want to do this. Have you made up your mind? (Y/N)");
        } while(response !==  "Y" && response !== "N");
        if (response === "N") console.log("Reposte in pace");
    }

    if(response === "N") {
        alert("It's good that you regained your senses.");
        break;
    }
    enemyHP--;
} */

// Functions
console.log("---FUNCTIONS---");

// Array
console.log("---ARRAY---");

// Dictionary
console.log("---DICTIONARY---");

// Tips
console.log("---TIPS---");