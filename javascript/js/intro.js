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
console.log("Logical Operators: &&, ||, !; and, or, not");

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

// Ternary Operator: Condition ? value_if_true : value_if_false
console.log(`${age < 13 ? "young" : "old?"}`);

var enemyHP = 5;
for(enemyHP; enemyHP != 0; enemyHP--){
    // current enemy HP: 1
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
        if (response === "Y") alert("Reposte in pace");
    }

    if(response === "N") {
        alert("It's good that you regained your senses.");
        break;
    }
}

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
function addTwoNumbers(first, second=3) {
    return first + second;
}
const multiplyTwoNumbers = (first, second=2) => first * second;

console.log("2 + 3 =", addTwoNumbers(2));
console.log("2 + 10 =", addTwoNumbers(2, 10));
console.log("2 * 2 =", multiplyTwoNumbers(2));
console.log("2 * 10 =", multiplyTwoNumbers(2, 10));

// Array
console.log("---ARRAY---");
const quizScores = [5, 5, 5, 3, 4];

console.log(`${quizScores[0]} is the first score.`);
console.log(`${quizScores[quizScores.length - 1]} is the last score.`);

function displayScoresForLoop(scores) {
    console.log("Regular For Loop");
    for (let counter = 0; counter < scores.length; counter++)console.log(`${counter}: ${scores[counter]}/5`);
}
function displayScoresForOf(scores) {
    console.log("For Of");
    for (score of scores) console.log(`${score}/5`);
}

function displayScoresForEach(scores) {
    console.log("For Each");
    scores.forEach((score, index) => {
        let mistake = Math.abs(score - 5)
        console.log(`${index}: ${score}/5 -> ${mistake} mistakes`);
    })
}

displayScoresForEach(quizScores);
displayScoresForOf(quizScores);
displayScoresForEach(quizScores);

// Pop
console.log("Methods");
quizScores.pop()
console.log(`3 is located at index ${quizScores.indexOf(3)}`);
console.log(`4 is located at index ${quizScores.indexOf(4)}`);
displayScoresForEach(quizScores);

// Concat
console.log(quizScores.concat([2, 3]))

// Sort
quizScores.sort()
displayScoresForEach(quizScores);

// Splice(start, deletecount, items)
quizScores.splice(quizScores.indexOf(3), 1, 4, 3, 2, 3);
displayScoresForEach(quizScores);

// Filter
const scoresLessThanFour = quizScores.filter((score) => score < 4); 
displayScoresForEach(scoresLessThanFour);

// Map
const scoresPenaltyAdded = quizScores.map((score) => score - 1);
displayScoresForEach(scoresPenaltyAdded);

// Dictionary
console.log("---DICTIONARY---");
const student = {
    name: "Luis Antonio",
    age: 19,
    isEnrolled: true,
    subjects: ["Introduction to Programming", "Discrete Mathematics"],
    chant: () => console.log("Python is my favorite language!")
}

for (attribute in student) {
    console.log(student[attribute]);
}
student.chant();

for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

console.log('Keys: ', Object.keys(student));
console.log('Values: ', Object.values(student));