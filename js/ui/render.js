import { createMovieCard } from "./cards.js";
export async function renderMovies(arrSortMovies) {
	const sectionMovies = document.querySelector(".movies");
	sectionMovies.replaceChildren();
	const cardMovie = arrSortMovies.map((movie) => {
		return createMovieCard(movie);
	});
	sectionMovies.append(...cardMovie);
}
