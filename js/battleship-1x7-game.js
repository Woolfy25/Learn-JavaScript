let randomLoc = Math.floor(Math.random() * 5);

const location1 = randomLoc; // variabilele care tin locatioa barcii
const location2 = location1 + 1; // variabilele care tin locatioa barcii
const location3 = location2 + 1; // variabilele care tin locatioa barcii

let guess; // variabila input guess

let hits = 0; // variabila nr de hit-uri

let guesses = 0; // variabila nr de alegeri facute

let isSunk = false; // variabila pentru a verifica daca este scufundat

// COD JOC

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
  // Daca guess este mai mic decat 0 SI mai mare decat 6 atunci alerteaza userul ca a gresit.
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;

    if (guess == location1) {
      alert("HIT!");
      hits += 1;
    } else if (guess == location2) {
      hits += 1;
      alert("HIT!");
    } else if (guess == location3) {
      hits += 1;
      alert("HIT!");
    } else {
      alert("MISS!");
    }

    if (hits == 3) {
      isSunk = true;
      alert("You sank my battleship");
    }
  }
}
let stats =
  "You took " +
  guesses +
  " guesses to sink the battleship which means your accuracy was " +
  3 / guesses;

alert(stats);
