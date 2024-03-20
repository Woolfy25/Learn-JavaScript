const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

let output;
let highScore = 0;
let numberOfTests;

for (let i = 0; i < scores.length; i += 1) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  numberOfTests = i;
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}

for (let i = 0; i < highScore; i += 1) {}

console.log("Bubbles tests: " + numberOfTests); // grsit
console.log("Highest bubble score: " + highScore);
