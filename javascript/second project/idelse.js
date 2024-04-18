// if else statement

// if(){} sytax of if else statement

// let favColor = "yellow";

// switch (favColor) {
//   // favColor
//   case "green":
//     console.log("green color is available");
//     break;
//   case "yellow":
//     console.log("yellow color is available");
// }

// if (favColor === "blue" || favColor === "green") {
//   console.log("this color is  available");
// } else if (favColor === "green") {
//   console.log("Green color is not available");
// } else if (favColor === "yellow") {
//   console.log("Yellow color is not available");
// } else {
//   console.log("we do not have this color");
// }

let label = document.getElementById("partycheck");
let input = document.getElementById("bbt");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  number = input.value;
  if (number >= 18) {
    label.innerText = "you are eligible to attend this par ";
  } else if (number <= 18) {
    label.innerText = "sorry!you cannot attend this party";
  } else {
    label.innerText = "sorry!you cannot attend this party";
  }
});
