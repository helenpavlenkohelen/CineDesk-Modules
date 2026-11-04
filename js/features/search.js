import { sortMovieOfSelect, currentSort, getDataOfsearch } from "./sort.js";
import { renderMovies } from "../ui/render.js";
import { listenSaveMovie } from "./favorites.js";
import { getMovies } from "../api/api.js";

export async function getSearch(value) {
	const dataSearch = await getMovies(value);
	const sectionMovies = document.querySelector(".movies");
	getDataOfsearch(dataSearch.Search);
	const arrSortMovies = sortMovieOfSelect(currentSort);
	renderMovies(arrSortMovies);
	listenSaveMovie(sectionMovies);
}
