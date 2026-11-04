import { getSearch } from "../features/search.js";
let idx;
const input = document.querySelector(".header__search");
input.addEventListener("input", () => {
	const value = input.value;
	debounce(value);
});

function debounce(value) {
	if (idx) {
		clearTimeout(idx);
	}
	idx = setTimeout(() => {
		getSearch(value);
	}, 1000);
}
