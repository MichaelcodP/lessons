// строгий режим
"use strict";




// Виконання завдання Урок №26


// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

const items = document.querySelectorAll('.item');
items.forEach(item => {
	item.addEventListener("click", itemAction);	
});
function itemAction(event) {
	if (event.target.classList.contains("active")) {
		event.target.classList.remove("active");
	} else {
		event.target.classList.add("active");
	}
	/* event.preventDefault(); */
}

// Задача №2
// Дано в css/scssр: body прозоий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
const body = document.body;
window.onload = function() {
	body.classList.add("no-opacity");
}

// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const headerBlock = document.querySelector("header");
const footerBlock = document.querySelector("footer");

function changeFooterColor() {
	footerBlock.style.backgroundColor = "blue";
}
function resetFooterColor() {
	footerBlock.style.backgroundColor = "red";
}
headerBlock.addEventListener("mouseenter", changeFooterColor);
headerBlock.addEventListener("mouseleave", resetFooterColor);

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
// Створюємо функцію, яка буде будувати інтервал
// Цю задачу завдяки інтернету, сам код я наче зрозумів.
function buildInterval(element) {
	const delay = parseInt(element.dataset.delay, 10);
	const max = parseInt(element.dataset.max, 10);
  
	const interval = setInterval(() => {
	  const number = parseInt(element.textContent, 10) + 1;
	  if (number > max) {
		clearInterval(interval);
	  } else {
		element.textContent = number;
	  }
	}, delay);
  }
  
  window.addEventListener("scroll", function() {
	const items = document.querySelectorAll(".item");
	for (const item of items) {
	  if (item.getBoundingClientRect().top < window.innerHeight) {
		buildInterval(item);
	  }
	}
  });