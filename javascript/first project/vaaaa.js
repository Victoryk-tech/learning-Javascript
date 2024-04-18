//javascript is case sensitive

// let victory = 2;
// let VICTORY = 6;

// console.log(vicTORY);
// console.log(victory);

//spacing and breaks
// let sum =
//   1 +
//   5 +
//   //comment

//   6;

// console.log(sum);

//comments

//i am writing javascript

/*

yyehjdsbff,jfjgl.s
*/

//identifiers
//name,variable,function identifiers

//the identifier must start with a letter, _ or $

//valid identifiers
let name = "victory";
// let $age = "miemie";
// let last_name = "max";
// let name1 = "dan";

// //invalid identifiers

// // const 1234 ="philip"

// //semi-colon
// //it is not mandatory
// let country = "Nigeria";
// let city = "Delta state";

// console.log(country);

// //reserved words

// let i = 1;

// while (i < 10) {
//   console.log(i);
//   i++;
// }
// if (i === i) {
//   console.log(i);
// }

//literals
// let num = console.log(typeof num);

//values and variables

//values

// let firstName;
// console.log(firstName);

// //variables

// let secondName = "nene";

// console.log(secondName);
// console.log(secondName);
// console.log(secondName);
// console.log(secondName);
// console.log(secondName);

// x = 7;
// y = 7;

// console.log(x + y);

//Variable declaration

//let,const,var

//let

// let h;
// let miemie;

// let b, mine;

// let myName = "veekee";
// let j = 1,
//   v = 3,
//   k = 7;

// let age = 47;
// age = 55;
// console.log(age);

//const

// const birthYear = 1992

//var

// var age = 40;
// var age = 19;
// console.log(age);

// Basic arithmetic operators

// Addition

// let x = 100 + 10;
// console.log(x);

// // subtraction

// let subtractionResult = 20 - 10;
// console.log(subtractionResult);

// // multiplication

// let multiply = 20 * 70;
// console.log(multiply);

// // modulus

// let molen = 10 % 2;
// console.log(molen);

// // division

// let divide = 9 / 4;

// console.log(divide);

// let number = 100;
// let num2 = "mary";

// let numbers = number + num2;
// console.log(numbers);

// //Concatenation
// let myName = "Vicky";
// let mySurname = " Kem";
// // let myFullName = "my name is" + "" + myName;
// console.log(myName + mySurname);

// //Data type conversion

// let age = "30";
// age = Number(age);
// console.log(typeof age);

// Number()
// String()
// parseInt()
// parseFloat()
// toString()

//Increment operation
// let addcart = 1;
// addcart++;

// console.log(addcart);

// //Decrement operation
// let reduceCart = 8;
// reduceCart--;
// console.log(reduceCart);

let add = document.querySelector(".add");
let number = document.querySelector(".number");
let minus = document.querySelector(".minus");

let x = 1;

add.addEventListener("click", () => {
  x++;
  number.innerText = x;
  console.log(x);
});

minus.addEventListener("click", () => {
  x--;
  number.innerText = x;
  console.log(x);
});

//Addition assignment operator
// let myNumber = 10;
// myNumber += 5;
// console.log(myNumber);

//subtraction assignment operator

// let myNumber = 10;
// myNumber -= 5;
// console.log(myNumber);

//division assignment operator

// let myNumber = 10;
// myNumber /= 5;
// console.log(myNumber);

//modulus assignment operator
//  let myNumber = 11;
//  myNumber %= 5;
//  console.log(myNumber);

//multiplication assignment operator
// let myNumber = 10;
// myNumber *= 5;
// console.log(myNumber);

//exponent assignment operator
// let myNumber = 10;
// myNumber **= 5;
// console.log(myNumber);

// comparism operator

// ==,!=,<,<=,>,>= ===

// let myAge = 30;
// let myBroAge = 10;

// if (myAge > myBroAge) {
//   console.log("we are same age");
// } else {
//   console.log("we are not the same age");
// }

// logical operator

// &&, ||, !

// if (myAge === myBroAge && myAge > myBroAge) {
//   console.log("we are same age");
// } else {
//   console.log("we are not the same age");
// }

// ternary operator

// let age1 = "john";

// myAnswer = age1 == "john" ? "yes" : "no";
// console.log(myAnswer);

// if (age1ge === john) {
//   console.log("yes");
// } else {
//   console.log(no);
// }

// ifelse statement

// let button = document.getElementById("btn1");
// let input = document.getElementById("input1");
// let gender = document.getElementById("gender");

// button.addEventListener("click", () => {
//   convNum = input.value;
//   if (convNum > 10) {
//     gender.innerText = "you are small for this age";
//   } else {
//     gender.innerText = "you are big for this age";
//   }
// });
