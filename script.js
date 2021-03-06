// 1.Присвоение уровня сложности.
// 1.1. Обозначить переменные.

let levelEasy = document.querySelector('.nav__easy');
let levelNormal = document.querySelector('.nav__normal');
let levelHard = document.querySelector('.nav__hard');
let button = document.querySelector('.button');
let menu = document.querySelector('.menu')
let game = document.querySelector('.game')
let cardGO = `
  <div class="card">
    <img class="card__back" src="images/Карта%20BACK.png" alt="задняя сторона">
    <img class="card__front" src="images/Карта%20Game%20Over.png" alt="Игра окончена">
  </div>`
let cardBUG = `
  <div class="card">
    <img class="card__back" src="images/Карта%20BACK.png" alt="задняя сторона">
    <img class="card__front" src="images/Карта%20BUG.png" alt="Победа!">
  </div>`
let easy = `<div class="flex">${cardGO} ${cardBUG} ${cardGO}</div>`
let normal = `<div class="flex">${cardGO} ${cardBUG} ${cardGO} </div> <div class="flex">${cardGO} ${cardGO} ${cardGO}</div>`
let hard = `<div class="flex">${cardGO} ${cardBUG} ${cardGO} ${cardGO} ${cardGO}</div> <div class="flex">${cardGO} ${cardGO} ${cardGO} ${cardGO} ${cardGO}</div>`

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

// 2. При нажатии кнопки "Начать игру" скрывается меню.
// Вместе с этим идет поиск уровня и запускает функцию с соответствующим уровнем.

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

function showEasy () {
  game.innerHTML = `${easy}`
}

function showNormal () {
  game.innerHTML =`${normal}`
}

function showHard () {
  game.innerHTML =`${hard}`
}

button.addEventListener('click', discoverLevel );

// При нажатии на карту, происходит переворачивание.

// Карта BUG появляется рандомно? Если надо.

// При клике на открытую карту возврат меню