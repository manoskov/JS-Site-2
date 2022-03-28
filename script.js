// Toggle смена светлой темы на темную

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme'); // убирает или добавляет светлую тему
  page.classList.toggle('dark-theme'); // обдновременно добавляет или убирает темную тему
};

// Объявляем переменные

let text = document.getElementById('text');

let oneColumn = document.getElementById('one-column');

let twoColumns = document.getElementById('two-columns');

let threeColumns = document.getElementById('three-columns');

let fact = document.getElementById('fact');

let number = document.getElementById('number');

let randomButton = document.getElementById('random-button');

// Кнопки, меняющие число колонок

function oneFunc () {
    text.style.columns = 1;
};

function twoFunc () {
    text.style.columns = 2;
};

function threeFunc () {
    text.style.columns = 3;
};

oneColumn.onclick = oneFunc;

twoColumns.onclick = twoFunc;

threeColumns.onclick = threeFunc;

// Случайный факт


let randomFact = () => {
    const factsList = ['I am 6 feet tall.', 'I have a ph.d. in history.', 'I worked as a translator.', 'I was born in the USSR.', 'I was a blogger for 2 years.', 'I want to move to Germany.'];
    let randomNumber = Math.floor(Math.random() * factsList.length);
    number.innerHTML = randomNumber;
    return factsList[randomNumber];
}; 

function assignFact() {  fact.innerHTML = randomFact();
};

randomButton.addEventListener('click', assignFact);