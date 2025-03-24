/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasSword = false;
let hasShield = false;
let foundSecretPath = false;

console.log("You wake up in a mysterious forest. There are two paths ahead: one leads to an abandoned castle, the other to a dense jungle.");
const choice1 = readline.question("Do you go to the 'castle' or the 'jungle'? ");

if (choice1 === "castle") {
    console.log("You approach the old castle and find a rusty sword on the ground.");
    hasSword = true;
} else if (choice1 === "jungle") {
    console.log("You push through thick vines and find a sturdy shield hidden among the trees.");
    hasShield = true;
} else {
    console.log("You wander aimlessly and get lost. The adventure ends.");
    process.exit();
}

console.log("As you move forward, you see an ominous cave and a hidden trail.");
const choice2 = readline.question("Do you enter the 'cave' or take the 'trail'? ");

if (choice2 === "cave" && (hasSword || hasShield)) {
    console.log("A wild beast attacks! Luckily, you have some protection.");
    if (hasSword && hasShield) {
        console.log("With your sword and shield, you defeat the beast and find a secret path.");
        foundSecretPath = true;
    } else if (hasSword && !hasShield) {
        console.log("You fight bravely but take some damage. You barely escape.");
    } else if (!hasSword && hasShield) {
        console.log("You block the beast’s attacks but can't fight back. You escape, but the beast follows you.");
    }
} else if (choice2 === "cave" && !hasSword && !hasShield) {
    console.log("The beast overpowers you. Your adventure ends.");
    process.exit();
} else if (choice2 === "trail") {
    console.log("You follow the trail and discover an ancient ruin.");
    foundSecretPath = true;
}

if (foundSecretPath) {
    console.log("At the end of your journey, you find a hidden treasure chest.");
    const choice3 = readline.question("Do you 'open' the chest or 'leave' it? ");

    if (choice3 === "open") {
        console.log("Inside, you find legendary armor! You become the guardian of the land.");
    } else {
        console.log("You leave the chest behind and walk away, your adventure unfinished.");
    }
} else {
    console.log("End of Journey");
}