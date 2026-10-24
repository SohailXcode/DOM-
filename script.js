let greeting = document.querySelector("#greeting");
let nameBox = document.querySelector("#nameBox");
let colorBtn = document.querySelector("#colorBtn");
let runBtn = document.querySelector("#runBtn");

// WOW 1: The heading changes while you type
nameBox.addEventListener("input", function () {
  if (nameBox.value === "") {
    greeting.textContent = "Hello, stranger!";
  } else {
    greeting.textContent = "Hello, " + nameBox.value + "!";
  }
});

// WOW 2: Random background color on every click
colorBtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// WOW 3: A button that runs away from the mouse
runBtn.style.position = "absolute";
runBtn.style.left = "300px";
runBtn.style.top = "200px";

runBtn.addEventListener("mouseover", function () {
  runBtn.style.left = Math.random() * 500 + "px";
  runBtn.style.top = Math.random() * 300 + "px";
});

// If a student is fast enough to catch it
runBtn.addEventListener("click", function () {
  greeting.textContent = "You caught me! 🎉";
});
