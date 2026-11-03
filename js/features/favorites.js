export function listenSaveMovie(movies) {
	movies.addEventListener("click", (e) => {
		// localStorage.clear();
		const currentElem = e.target;
		if (!currentElem.closest(".movie-card__favorite")) {
			return;
		}

		const btnSaveMovie = e.target.parentElement.firstElementChild;
		btnSaveMovie.classList.add("movie-card__favorite--active");
		btnSaveMovie.textContent = "♥";
		const titleMovie =
			e.target.nextElementSibling.nextElementSibling.firstElementChild
				.textContent;
		const yearMovie =
			e.target.nextElementSibling.nextElementSibling.firstElementChild
				.nextElementSibling.firstElementChild.textContent;
		const typeMovie =
			e.target.nextElementSibling.nextElementSibling.firstElementChild
				.nextElementSibling.firstElementChild.nextElementSibling
				.textContent;
		const imgPoster = e.target.nextElementSibling.src;
		console.log(imgPoster);
		const movie = {
			title: titleMovie,
			year: yearMovie,
			type: typeMovie,
			poster: imgPoster,
		};
		const arrayMovies = JSON.parse(localStorage.getItem("movies")) || [];
		arrayMovies.push(movie);
		const arrayLocalStorage = JSON.stringify(arrayMovies);
		localStorage.setItem("movies", arrayLocalStorage);
		console.log(arrayMovies);
		renderMoviesLocalStorage();

		const alert = document.querySelector(".alert");

		alert.classList.add("visible");
		setTimeout(() => {
			alert.classList.remove("visible");
		}, 3000);
	});
}

export function listSaveMovie() {
	const divListMovies = document.createElement("div");
	const btnSaveMovie = document.querySelector(".header__favorite");
	divListMovies.classList.add("save-movies");
	const btnBack = document.createElement("button");
	btnBack.classList.add("save-movies__btn-back");
	btnBack.textContent = "← Back";

	btnBack.addEventListener("click", () => {
		divListMovies.classList.remove("save-movies--active");
		btnSaveMovie.classList.remove("header__favorite--active");
	});

	btnSaveMovie.addEventListener("click", () => {
		const choiceMovies = document.querySelector(".save-movies");

		if (!choiceMovies) {
			const olListMovies = createSaveMovies();
			divListMovies.append(btnBack, olListMovies);
			document.body.append(divListMovies);

			requestAnimationFrame(() => {
				divListMovies.classList.add("save-movies--active");
			});

			btnSaveMovie.classList.add("header__favorite--active");
		} else {
			choiceMovies.classList.toggle("save-movies--active");

			if (choiceMovies.classList.contains("save-movies--active")) {
				btnSaveMovie.classList.add("header__favorite--active");
			} else {
				btnSaveMovie.classList.remove("header__favorite--active");
			}
		}
	});
}

export function createSaveMovies() {
	const olListMovies = document.createElement("ol");
	olListMovies.classList.add("save-movies__list");

	const arrayMovies = JSON.parse(localStorage.getItem("movies")) || [];
	for (const movie of arrayMovies) {
		const pTitle = document.createElement("p");
		pTitle.classList.add("save-movies__title");
		const liMovie = document.createElement("li");
		liMovie.classList.add("save-movies__list-item");
		const divLiMovie = document.createElement("div");
		divLiMovie.classList.add("save-movies__item");

		const imgPoster = document.createElement("img");
		imgPoster.classList.add("save-movies__poster");
		imgPoster.src = movie.poster;

		pTitle.textContent = movie.title;

		divLiMovie.append(imgPoster, pTitle);
		liMovie.append(divLiMovie);
		olListMovies.append(liMovie);
	}
	return olListMovies;
}

export function renderMoviesLocalStorage() {
	const choiceMovies = document.querySelector(".save-movies");

	if (!choiceMovies) {
		return;
	} else {
		const olListMovies = createSaveMovies();
		choiceMovies.firstElementChild.remove();
		choiceMovies.append(olListMovies);
	}
}
