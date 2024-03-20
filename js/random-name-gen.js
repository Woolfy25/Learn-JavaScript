function randomName() {
  const name1 = ["Ramon", "Ariana", "papanas", "Roger", "Guster"];
  const name2 = ["gradinarit", "gusterul", "se", "hodini", "io dau"];
  const name3 = ["bitang", "ramen", "clocoteste", "pui", "pute"];

  let random1 = Math.floor(Math.random() * name1.length);
  let random2 = Math.floor(Math.random() * name2.length);
  let random3 = Math.floor(Math.random() * name3.length);

  let message = name1[random1] + " " + name2[random2] + " " + name3[random3];

  alert(message);
}

randomName();
