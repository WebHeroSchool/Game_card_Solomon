let levelEasy = document.querySelector('.nav__easy');
let levelNormal = document.querySelector('.nav__normal');
let levelHard = document.querySelector('.nav__hard');
let button = document.querySelector('.button');
let menu = document.querySelector('.menu')
let game = document.querySelector('.game')
let cardGO = `
  <div class = "container" >
    <div class = "game-card">
      <div class = "game-card__front"></div>
      <div class = "game-card__back"></div>
    </div>
  </div>`
let cardBUG = `
  <div class = "container" >
    <div class = "game-card">
      <div class = "game-card__front"></div>
      <div class = "game-card__bug"></div>
    </div>
  </div>`
let easy = `<div class="flex">${cardGO} ${cardBUG} ${cardGO}</div>`
console.log(easy)
let normal = `<div class="flex">${cardGO} ${cardBUG} ${cardGO} </div> <div class="flex">${cardGO} ${cardGO} ${cardGO}</div>`
let hard = `<div class="flex">${cardGO} ${cardBUG} ${cardGO} ${cardGO} ${cardGO}</div> <div class="flex">${cardGO} ${cardGO} ${cardGO} ${cardGO} ${cardGO}</div>`
let cards;
// 1.2. При клике на уровень сложности назначается класс mark.

function markEasy () {
  levelEasy.classList.add('mark');
  levelNormal.classList.remove('mark');
  levelHard.classList.remove('mark');
}

function markNormal () {
  levelEasy.classList.remove('mark');
  levelNormal.classList.add('mark');
  levelHard.classList.remove('mark');
}

function markHard () {
  levelEasy.classList.remove('mark');
  levelNormal.classList.remove('mark');
  levelHard.classList.add('mark');
}

levelEasy.addEventListener('click', markEasy);
levelNormal.addEventListener('click', markNormal);
levelHard.addEventListener('click', markHard);

function hiddenMenu () {
  menu.classList.toggle('hidden')
  game.classList.toggle('flex')
}

function discoverLevel() {
  if (levelEasy.classList.contains('mark')) {
    showEasy ()
    hiddenMenu ()
  } else if (levelNormal.classList.contains('mark')) {
    showNormal ()
    hiddenMenu ()
  } else if (levelHard.classList.contains('mark')) {
    showHard ()
    hiddenMenu ()
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showEasy () {
  game.innerHTML = `${easy}`
  cards = Array.from(document.querySelectorAll('.game-card'));
  let i = 0;
  cards.forEach(function (item) {
    // При нажатии на карту, происходит переворачивание.
    function up() {
      if (i < 2) {
        item.classList.add('active');
        i++
      } if (i === 2) {
        hiddenMenu();
        i++;
      }
    }
    item.addEventListener('click', up);
  })
}

function showNormal () {
  game.innerHTML =`${normal}`
  cards = document.querySelectorAll('.game-card');
  let i = 0;
  cards.forEach(function (item) {
    // При нажатии на карту, происходит переворачивание.
    function up() {
      if (i < 2) {
        item.classList.add('active');
        i++
      } if (i === 2) {
        hiddenMenu();
        i++;
      }
    }
    item.addEventListener('click', up);
  })
}

function showHard () {
  game.innerHTML =`${hard}`
  cards = document.querySelectorAll('.game-card');
  let i = 0;
  cards.forEach(function (item) {
    // При нажатии на карту, происходит переворачивание.
    function up() {
      if (i < 2) {
        item.classList.add('active');
        i++
      } if (i === 2) {
        hiddenMenu();
        i++;
      }
    }
    item.addEventListener('click', up);
  })
}

button.addEventListener('click', discoverLevel );
//1111111 обойтись одной функцией для отрисовки карт,
// внутри поставить условие, чтобы в зависимости от уровня выдавалось нужное количество карт

// Карта BUG появляется рандомно? Если надо.

// При клике на открытую карту возврат меню