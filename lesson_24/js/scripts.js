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


// Виконання завдання Урок №24


// Задача №1
// Що потрапить в консоль?
/*
Працює таким чином:
1. Маємо змінну someVar = 0.
2. Завдяки префіксальному інкременту до значення змінної someVar +1,
	інакше кажучи інкремент дає можливість збільшити значення перемінної на +1
3. Умова у якій ми звертажмося до змінної, і ця умова спрацює якщо someVar буде true.
*/
let someVar = 0;
++someVar;
if (someVar) {
	console.log(typeof someVar);
}

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
/*
Працює таким чином:
1. Створення змінної для кількості рядків "let someString = 10";
2. Використання цикла for для появлення рядків від "Пункт №1" до "Пункт №10";
3. Виведення в консоль " `Пункт №` " та номер пункту;
*/
let someString = 10;
for (let i = 1; i <= someString; i++) {
	console.log(`Пункт №` + i);
}


//Задача №3
//Що потрапить в консоль ?
/*
Працює таким чином:
1. 2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20";
2. 40 <= 10 || 30 / 2 < 5 && 10 <= "10" || false;
3. false || 30 / 2 < 5 && 10 <= "10" || false;
4. false || 15 < 5 && 10 <= "10" || false;
5. false || false && true || false;
6. false && true;
7. Результатом буде false;
Цикл не спрацює тому, що результат цього буде false, а умови else немає.
*/
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
} else { // додав для прикладу при false.
	console.log('Може ти все таки перерахуешь?')
}


// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// Ключові слова: повернає (returt), ділення (Division);
/*
*/
function calcDivision(a, b) {
	const result = a / b;
	if (isNaN(result)) {
		console.log(`It's NaN`);
	} else if (!isFinite(result)) {
		console.log(`It's Infinity`);
	} else {
		return result;
	}
}
function showMessage(someText = `Текст за замовченням`) {
	console.log(someText);
}
const resultDivision = calcDivision(6, 1);
showMessage(`Результат ділення: ${resultDivision}`);



// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
/**/
let someArray = [21, false, "Misha", 10, "32"];
console.log(someArray);
console.log(Array.isArray(someArray));
someArray.forEach((value, index) => {
	console.log(` Номер ячейки: ${index}`);
	console.log(` Значення ячейки: ${value}`);
	if (value === 10) {
		console.log(` Має єлемент 10`);
	} else if (!someArray.includes(10)) {
		someArray.push(10);
		console.log(someArray);
	}

})
