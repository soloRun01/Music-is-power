// JavaScript
const MAX_CHARACTERS = 40;
const input = document.querySelector("input");
const fieldText = document.querySelector(".text-field");

function inputText() {
  // Keep the limit in place even if text is pasted or inserted programmatically.
  input.value = input.value.slice(0, MAX_CHARACTERS);
  fieldText.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = input.value;

  const length = h3.textContent.length;

  // Reduce the size gradually instead of jumping between very small sizes.
  const fontSize = Math.max(3.7, 5.7 - Math.max(0, length - 15) * 0.08);
  h3.style.fontSize = `${fontSize}rem`;

  fieldText.appendChild(h3);
}

input.maxLength = MAX_CHARACTERS;
input.addEventListener("input", inputText);

let blue = document.querySelector(".blue");
let red = document.querySelector(".lime");
let black = document.querySelector(".black");

// three js now !!!
