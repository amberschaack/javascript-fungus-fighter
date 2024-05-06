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

function arcaneAttack(event) {
  console.log('arcane attack');
  fungusHP -= 14;
  attackAP -= 12;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function entangleAttack(event) {
  console.log('entangle attack');
  fungusHP -= 9;
  attackAP -= 23;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function dragonAttack(event) {
  console.log('dragon attack');
  fungusHP -= 47;
  attackAP -= 38;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function starAttack(event) {
  console.log('star attack');
  fungusHP -= 25;
  attackAP -= 33;
  checkHealth();
  console.log('fungusHP:', fungusHP, '| attackAP: ', attackAP);
  hpMeter.innerHTML = `${fungusHP} HP`;
  apMeter.innerHTML = `${attackAP} AP`;
}

function checkHealth() {
  if (fungusHP <= 0) {
    fungusHP = 0;
  }
  if (attackAP <= 0) {
    attackAP = 0;
  }
}
