import { renderMovies } from "../ui/render.js";

let allMovies = [];
let sortAllMovies = [];
export let currentSort = "default";

export function getDataOfsearch(dataSearch) {
	allMovies = dataSearch;
	sortAllMovies = allMovies.slice();
}

const sortSelect = document.querySelector("#sort-movies");

export function sortMovieOfSelect(currentSort) {
	switch (currentSort) {
		case "asc":
			sortAllMovies.sort((a, b) => {
				return (
					Number(a.Year.split("-")[0]) - Number(b.Year.split("-")[0])
				);
			});
			break;

		case "desc":
			sortAllMovies.sort((a, b) => {
				return (
					Number(b.Year.split("-")[0]) - Number(a.Year.split("-")[0])
				);
			});
			break;

		default:
			sortAllMovies = allMovies.slice();
	}
	return sortAllMovies;
}

sortSelect.addEventListener("change", () => {
	console.log("change сработал");
	currentSort = sortSelect.value;
	const arrSortMovies = sortMovieOfSelect(currentSort);
	renderMovies(arrSortMovies);
});
