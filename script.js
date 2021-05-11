// 1.Присвоение уровня сложности.
// 1.1. Обозначить переменные.

let levelEasy = document.querySelector('.nav__easy');
let levelNormal = document.querySelector('.nav__normal');
let levelHard = document.querySelector('.nav__hard');
let button = document.querySelector('.button');
let easy = document.querySelector('.mark');
let normal = document.querySelector('.mark');
let hard = document.querySelector('.mark');
let menu = document.querySelector('.menu')
let game = document.querySelector('.game')

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
  menu.classList.add('hidden')
}

function discoverLevel() {
  if (easy = true) {
    showEasy ()
  } if (normal = true) {
    markHard ()
  } if (hard = true) {
    markHard ()
    hiddenMenu ()
  } else {
    console.error(onerror)
  }
}

function showEasy () {
  game.innerHTML = `<div class="card">
  <img class="card__back" src="images/Карта%20BACK.png" alt="задняя сторона">
  <img class="card__front" src="images/Карта%20Game%20Over.png" alt="Игра окончена">
</div>

<div class="card">
  <img class="card__back" src="images/Карта%20BACK.png" alt="задняя сторона">
  <img class="card__front" src="images/Карта%20BUG.png" alt="Победа!">
</div>`
}

button.addEventListener('click', discoverLevel );

// Нажимая на кнопку "Начать игру", скрывается меню и выдается нужное количество карт карт