// строгий режим
"use strict";


/* Для бургера
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});
*/

/*// Бере ширину вікна перегляду в пікселях і розмір шрифту в довжину
function clampBuilder(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
	const root = document.querySelector("html");
	const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

	const minWidth = minWidthPx / pixelsPerRem;
	const maxWidth = maxWidthPx / pixelsPerRem;

	const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
	const yAxisIntersection = -minWidth * slope + minFontSize

	return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`;
}
// clampBuilder( 360, 840, 1, 3.5 ) -> "clamp( 1rem, -0.875rem + 8.333vw, 3.5rem )"

function calculateCh(element, fontSize) {
	const zero = document.createElement("span");
	zero.innerText = "0";
	zero.style.position = "absolute";
	zero.style.fontSize = fontSize;

	element.appendChild(zero);
	const chPixels = zero.getBoundingClientRect().width;
	element.removeChild(zero);

	return chPixels;
}

document.querySelectorAll("p").forEach((p) => {
	p.style.fontSize = clampBuilder(320, 960, 1, 3);
	p.style.width = `${(320 / calculateCh(p, "1rem")) * 0.9}ch`;
});*/

// =====================================================================

/*console.log("Hello World!");*/

// Строковое преображение

/*let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);
console.log(userAge);
console.log(typeof userAge);*/

/*let userAge;
let myAge;
userAge = 21;
console.log(userAge);
myAge = userAge;
console.log(myAge);

const userAge = 21;
const userName = `Misha`;
console.log(userAge);
console.log(typeof userAge);
console.log(userName);
console.log(typeof userName);
console.log(`Отже ми маємо... ${userName} якому ${userAge}`);

/*let someString = `Привіт! Як справи?`;
console.log(someString.length);*/
/*
let someString = `Привіт! Як справи?`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());

let someVar = `35.5px`;
let someNum = parseFloat(someVar);
console.log(someNum);

let varOne = +"10";
let varTwo = +"20";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/


// Виконання завдання Урок №25


// Задача №1
// Отримати в константу елемент <body>
/*
const bodyElement = document.body; 
console.log(bodyElement);
*/
// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
/*
function addList(num = 5) {
	const bodyElement = document.body;
	let ulElement = document.createElement("ul");
	// Використовуємо цикл for для створення LI
	for (let i = 1; i <= num; i++) {
		let liElement = document.createElement("li");
		liElement.textContent = `Пункт №` + i;
		ulElement.prepend(liElement);
	}
	bodyElement.prepend(ulElement);
}
addList();
*/
// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.
/*
const bodyElement = document.body;
bodyElement.classList.toggle('loaded');
bodyElement.style.background = `green`;
*/
// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
/*
const blockItems = document.querySelectorAll(".item");
// Використовуємо цикл for для ітерації по масиву items
for (let i = 0; i < blockItems.length; i++) {
	  // Додаємо клас active до кожного елемента
	blockItems[i].classList.add("active");
	blockItems[i].textContent = `Елемент №` + (i + 1);
}
*/
// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
/*
const buttonElement = document.querySelector('.button');
function scrollToBlock(buttonElement) {
	if (buttonElement) {
		buttonElement.scrollIntoView({
			block: 'start',
			inline: 'start',
			behavior: 'smooth'
		});
	} else {
		console.error("Елемент не знайдено");
	}	
}
scrollToBlock(buttonElement);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const LINK_ELEMENT = document.querySelector('.link');
let value = LINK_ELEMENT.getAttribute('data-value');

if (value < 200) {
	LINK_ELEMENT.style.color = "red";
} else if (value == 200) {
	LINK_ELEMENT.style.color = "green";
} else {
	LINK_ELEMENT.textContent='Ну ось потрібно воно тобі, а?';
}
*/