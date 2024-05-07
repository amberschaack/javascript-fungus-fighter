// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
  console.log('Ready to go!');

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

onReady();

let fungusHP = 100;
let attackAP = 100;

const hpMeter = document.getElementById('fungus-meter');
const apMeter = document.getElementById('attack-meter');
const fungusMovement = document.getElementById('fungus-movement');
const arcaneButton = document.getElementById('arcane-button');
const entangleButton = document.getElementById('entangle-button');
const dragonButton = document.getElementById('dragon-button');
const starButton = document.getElementById('star-button');
let fungusValue = document.getElementById('hp-meter');
let attackValue = document.getElementById('ap-meter');

function arcaneAttack(event) {
  console.log('arcane attack');
  fungusHP -= 14;
  attackAP -= 12;
  fungusValue.value = fungusHP;
  attackValue.value = attackAP;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function entangleAttack(event) {
  console.log('entangle attack');
  fungusHP -= 9;
  attackAP -= 23;
  fungusValue.value = fungusHP;
  attackValue.value = attackAP;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function dragonAttack(event) {
  console.log('dragon attack');
  fungusHP -= 47;
  attackAP -= 38;
  fungusValue.value = fungusHP;
  attackValue.value = attackAP;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function starAttack(event) {
  console.log('star attack');
  fungusHP -= 25;
  attackAP -= 33;
  fungusValue.value = fungusHP;
  attackValue.value = attackAP;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function checkHealth() {
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  if (attackAP < 0) {
    attackAP = 0;
  }
  if (fungusHP === 0) {
    fungusMovement.classList.replace('walk', 'dead');
  }
  if (attackAP === 0 || fungusHP === 0) {
    fungusMovement.classList.replace('walk', 'jump');
    arcaneButton.disabled = true;
    entangleButton.disabled = true;
    dragonButton.disabled = true;
    starButton.disabled = true;
  }
  if (fungusHP < 50) {
    setInterval(intervalHealth, 1000);
  }
}

function intervalHealth() {
  fungusHP++;
  fungusValue.value = fungusHP;
  hpMeter.innerHTML = `${fungusHP} HP`;
}

// need to figure out how to get it to stop at 100
