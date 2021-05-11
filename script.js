// 1.Присвоение уровня сложности.
// 1.1. Обозначить переменные - уровней.

let levelEasy = document.querySelector('.nav__easy');
let levelNormal = document.querySelector('.nav__normal');
let levelHard = document.querySelector('.nav__hard');

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

// 2. выбранный уровень попадает в кнопку - начать игру.

