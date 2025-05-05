// JavaScript
let input = document.querySelector("input");
let fieldText = document.querySelector(".text-field");

function inputText() {
  fieldText.innerHTML = ""; // Remove old h3

  let h3 = document.createElement("h3");
  h3.textContent = input.value;

  let length = h3.textContent.length;


  h3.style.background = "blue"


  if(length === 0 ){
    h3.style.background = "white"

  }

  // Font size based on total character length
  if (length > 50) {
    h3.style.fontSize = "0.5rem";
  } else if (length > 40) {
    h3.style.fontSize = "1rem";
  } else if (length > 35) {
    h3.style.fontSize = "3rem";
  } else if (length > 15) {
    h3.style.fontSize = "4rem";
  } else {
    h3.style.fontSize = "5.7rem";
  }
  
  fieldText.appendChild(h3);
}

input.addEventListener("input", inputText);




let blue = document.querySelector(".blue");
let red = document.querySelector(".lime");
let black = document.querySelector(".black");


// three js now !!!


