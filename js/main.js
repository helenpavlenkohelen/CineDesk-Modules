import { listSaveMovie } from "./features/favorites.js";
import { handleMovieCardClick } from "./features/details.js";
import "./utils/debounce.js";

document.addEventListener("DOMContentLoaded", () => {
	listSaveMovie();
	handleMovieCardClick();
});
