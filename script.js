// Toggle смена светлой темы на темную

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
    page.classList.toggle('light-theme'); // убирает или добавляет светлую тему
    page.classList.toggle('dark-theme'); // обдновременно добавляет или убирает темную тему
};

// Объявляем названия полей

const text = document.getElementById('text');

const oneColumn = document.getElementById('one-column');

const twoColumns = document.getElementById('two-columns');

const threeColumns = document.getElementById('three-columns');

const fact = document.getElementById('fact');

const number = document.getElementById('number');

const randomButton = document.getElementById('random-button');

const nextButton = document.getElementById('next-photo');

const prevButton = document.getElementById('prev-photo');

const galleryimage = document.getElementById('galleryimage');


// Кнопки, меняющие число колонок

function oneFunc() {
    text.style.columns = 1;
};

function twoFunc() {
    text.style.columns = 2;
};

function threeFunc() {
    text.style.columns = 3;
};

oneColumn.onclick = oneFunc;

twoColumns.onclick = twoFunc;

threeColumns.onclick = threeFunc;

// Случайный факт


let randomFact = () => {
    const factsList = ['Babies have around 100 more bones than adults.', 'The Eiffel Tower can be 15 cm taller during the summer.', '20% of oxygen on Earth is produced by the Amazon rainforest.', 'Hawaii moves 7.5cm closer to Alaska every year.', 'Polar bears are nearly undetectable by infrared cameras', 'Stomach acid is strong enough to dissolve stainless steel.', 'Venus is the only planet to spin clockwise.'];
    let randomNumber = Math.floor(Math.random() * factsList.length);
    number.innerHTML = randomNumber;
    return factsList[randomNumber];
};

function assignFact() {
    fact.innerHTML = randomFact();
};

randomButton.addEventListener('click', assignFact);

// Кнопки, переключающие картинки в галерее

let pictureNumber = 1;

function prevPicture() {
    pictureNumber = pictureNumber - 1;
    if (pictureNumber === 1) {
        galleryimage.src = "./images/001.jpg";
    } else if (pictureNumber === 2) {
            galleryimage.src = "./images/002.jpg";
    } else if (pictureNumber === 3) {
            galleryimage.src = "./images/003.jpg";
    } else if (pictureNumber === 4) {
            galleryimage.src = "./images/004.jpg";
    } else {
        pictureNumber = 5;
        galleryimage.src = "./images/005.jpg";
    }
};

prevButton.onclick = prevPicture;

function nextPicture() {
    pictureNumber = pictureNumber + 1;
    if (pictureNumber === 1) {
        galleryimage.src = "./images/001.jpg";
    } else if (pictureNumber === 2) {
            galleryimage.src = "./images/002.jpg";
    } else if (pictureNumber === 3) {
            galleryimage.src = "./images/003.jpg";
    } else if (pictureNumber === 4) {
            galleryimage.src = "./images/004.jpg";
    } else if (pictureNumber === 5) {
        galleryimage.src = "./images/005.jpg";
    } else if (pictureNumber > 5) {
        pictureNumber = 1;
        galleryimage.src = "./images/001.jpg";
    }
};

nextButton.onclick = nextPicture;

galleryimage.onclick = nextPicture; // при клике по самой картинке также переключает картинку на следующую