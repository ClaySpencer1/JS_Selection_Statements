console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//exercise 1
let favNumber = 42;
let guessNumber = prompt("Try and guess my favorite number");

if (guessNumber == favNumber) {
  console.log("Congratulations!!")
} else if (guessNumber < favNumber){
  console.log("Too low!")
} else if (guessNumber > favNumber) {
  console.log("too high!")
}

//exercise 2
let birthMonth = prompt("When is your birth month?");
switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default: 
    console.log("Not a Month");
}


//Exercise 3 
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "other"
}
switch (colorId){
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White"
  
}

switch (sizeId){
  case "S":
    size = "Small";
    break;
  case "M":
    size = "medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`);