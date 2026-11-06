import { createMovieDetails } from "../ui/cards.js";
import { getMovieDetails } from "../api/api.js";

export function handleMovieCardClick() {
	const sectionMovies = document.querySelector(".movies");
	sectionMovies.addEventListener("click", async (e) => {
		if (e.target.closest(".movie-card__favorite")) {
			return;
		}

		const mainMovie = e.target.closest(".movie-card");
		if (!mainMovie) return;

		const movie = await getMovieDetails(mainMovie.dataset.movieId);

		console.log("Полученные данные фильма:", movie);

		if (!movie) return;

		const detailsCard = createMovieDetails(movie);

		const btnBack = detailsCard.querySelector(".movie-card-details__btn");
		btnBack.addEventListener("click", () => {
			detailsCard.replaceWith(mainMovie);
		});

		mainMovie.replaceWith(detailsCard);
	});
}
