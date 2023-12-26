/* Для бургера */
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

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