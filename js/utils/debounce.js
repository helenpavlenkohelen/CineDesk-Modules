import { getSearch } from "../features/search.js";
let idx;
const input = document.querySelector(".header__search");
input.addEventListener("input", () => {
	const value = input.value;
	console.log("INPUT СРАБОТАЛ", value);
	debounce(value);
});

function debounce(value) {
	if (idx) {
		clearTimeout(idx);
	}
	idx = setTimeout(() => {
		console.log(value);
		console.log(idx);
		getSearch(value);
	}, 1000);
}
