let who = ["My dog", "My confused grandma", "The evil mailman", "My alligator"];
let action = ["destroyed", "peed on", "crushed", "annihilated"];
let what = ["my homework", "my phone", "my car"];
let when = ["before class", "while I was sleeping", "while I was exercising", "during lunch", "While I was gaming"];

function generateExcuse() {
    const subject = who[Math.floor(Math.random() * who.length)];
    const verb = action[Math.floor(Math.random() * action.length)];
    const object = what[Math.floor(Math.random() * what.length)];
    const time = when[Math.floor(Math.random() * when.length)];
    
    return `${subject} ${verb} ${object} ${time}`;
}

window.onload = () => {
    document.getElementById("excuse").innerHTML = generateExcuse();
};
