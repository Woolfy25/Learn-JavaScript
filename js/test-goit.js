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

console.log(filterArray([1, 2, 3, 4, 5], 5));
