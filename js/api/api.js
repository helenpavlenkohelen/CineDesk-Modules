import { showError } from "../ui/notification.js";
import { API_KEY } from "../config.js";

export async function getMovieDetails(idMovie) {
	const response = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&s=${idMovie}`,
	);

	return await checkToError(response);
}

export async function getMovies(search) {
	const response = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
	);

	return await checkToError(response);
}

export async function checkToError(response) {
	const alert = document.querySelector(".error-message");
	switch (response.status) {
		case 200:
			const dataSearch = await response.json();

			if (dataSearch.Response === "False") {
				showError(alert, "Movie not found");
				return;
			}
			return dataSearch;
		case 204:
			showError(alert, "No Content");
			break;
		case 400:
			showError(alert, "Bad Request");
			break;
		case 401:
			showError(alert, "Unauthorized, You need to log in");
			break;
		case 403:
			showError(alert, "Forbidden");
			break;
		case 404:
			showError(alert, "Not Found");
			break;
		case 429:
			showError(alert, "Too Many Requests");
			break;
	}
}
