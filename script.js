// 1.Присвоение уровня сложности.
// 1.1. Обозначить переменные - уровней.

let levelEasy = document.querySelectorAll('.nav__easy');
let levelNormal = document.querySelectorAll('.nav__normal');
let levelHard = document.querySelectorAll('.nav__hard');

// 1.2. При клике на уровень сложности назначается класс mark.

// let markEasy = () => levelEasy.classList.toggle('mark');
// let markNormal = () => levelNormal.classList.toggle('mark');
// let markHard = () => levelHard.classList.toggle('mark');

function markEasy () { levelEasy.classList.toggle('mark'); }
function markNormal () { levelNormal.classList.toggle('mark'); }
function markHard () { levelHard.classList.toggle('mark'); }

levelEasy.addEventListener('click', markEasy);
levelNormal.addEventListener('click', markNormal);
levelHard.addEventListener('click', markHard);


// 2. выбранный уровень попадает в кнопку - начать игру.

