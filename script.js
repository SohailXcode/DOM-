// querySelector gives the FIRST match

// 1. Select by id (use #)
let title = document.querySelector("#title");
title.style.color = "teal";

// 2. Select by class (use .)
let note = document.querySelector(".note");
note.style.backgroundColor = "yellow";

// 3. Select by tag name
let plain = document.querySelector("p");
plain.style.fontSize = "24px";

// 4. Select inside another element
let apple = document.querySelector("#fruits li");
apple.style.color = "red";

// 5. Select by attribute
let email = document.querySelector("input[type='email']");
email.style.border = "2px solid green";


// querySelectorAll gives ALL matches

let allItems = document.querySelectorAll("#fruits li");

// Loop through every item
for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.fontWeight = "bold";
}

// How many notes are there?
let allNotes = document.querySelectorAll(".note");
console.log("Number of notes:", allNotes.length);

// If nothing matches, we get null
let nothing = document.querySelector(".nothing");
console.log("Nothing found:", nothing);
