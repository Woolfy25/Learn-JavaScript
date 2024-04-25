// EXERCISE 1
function calculateTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  return sum;
}
// console.log(calculateTotal(3));

// EXERCISE 2

function findLongestWord(string) {
  // Change code below this line
  let splitString = string.split(" ");
  let longest = "";
  console.log(splitString);

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longest.length) {
      longest = splitString[i];
    }
  }
  return longest;
}

// console.log(findLongestWord("May the force be with you"));

// EXERCISE 3

function filterArray(numbers, value) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      result.push[numbers[i]];
    }
  }
  return result;
}

// console.log(filterArray([1, 2, 3, 4, 5], 5));

// EXERCISE 4

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (let value of colors) {
  if ((value = "rgb")) {
    rgbColors.push(colors[value]);
  } else {
    hexColors.push(colors[value]);
  }
}

// console.log(rgbColors);
// console.log(hexColors);

// EXERCISE 5

const products1 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let productPrice;

  for (let objects of products1) {
    if (objects.name === productName) {
      return (productPrice = objects.price);
    } else {
      return (productPrice = null);
    }
  }
}

// console.log(getProductPrice("Scanner"));

// EXERCISE 6

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let result = [];

  for (let objects of products) {
    if (Objects.keys(objects) === propName) {
      return 100000;
    }
  }
  return result;

  // Change code above this line
}

console.log(getAllPropValues("name"));

//  EXERCISE 7

// Funcție callback
function greet(name) {
  console.log(`Bine ai venit, ${name}.`);
}

// Funcție de tip HOF
function registerGuest(name, callback) {
  console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
  callback(name);
}
console.log(registerGuest("Andrei", greet));
registerGuest("Andrei", greet);
