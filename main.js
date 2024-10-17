/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("d6").addEventListener("click", roll_d6);
document.getElementById("d8").addEventListener("click", roll_d8);
document.getElementById("d6").addEventListener("mouseenter",  d6_enter);
document.getElementById("d6").addEventListener("mouseleave", d6_leave);
document.getElementById("d8").addEventListener("mouseenter",  d8_enter);
document.getElementById("d8").addEventListener("mouseleave", d8_leave);
document.getElementById("enter").addEventListener("click", greeting);

/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll_d6() {

    let roll = randInt(1,6);
    document.getElementById("die_roll").textContent = roll;

}

function roll_d8() {

    let roll = randInt(1,8);
    document.getElementById("die_roll").textContent = roll;
    
}

function d6_enter() {

    document.getElementById("die").textContent = "BOO!"

}

function d6_leave() {

document.getElementById("die").textContent = "bye..."

}

function d8_enter() {

    document.getElementById("die").textContent = "AHA!"

}

function d8_leave() {

document.getElementById("die").textContent = "wait a second..."

}

function greeting() {

    let name = document.getElementById("user_input").value;
    document.getElementById("greeting").textContent = `Hello ${name}!`

}



// Part 1



// Part 2



// Part 3



// Part 4

