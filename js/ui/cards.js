export function createMovieDetails(movie) {
	const articleCardDetails = document.createElement("article");
	articleCardDetails.classList.add("movie-card-details");

	const divWrapperPoster = document.createElement("div");
	divWrapperPoster.classList.add("movie-card-details__wrapper-poster");

	const divInfoMovie = document.createElement("div");
	divInfoMovie.classList.add("movie-card-details__info");

	const imgPoster = document.createElement("img");
	imgPoster.classList.add("movie-card-details__poster");

	const btnBack = document.createElement("button");
	btnBack.classList.add("movie-card-details__btn");
	btnBack.type = "button";
	btnBack.textContent = "← Back";

	const divDirector = document.createElement("div");
	divDirector.classList.add("movie-card-details__item");

	const h4Director = document.createElement("h4");
	h4Director.classList.add("movie-card-details__label");
	h4Director.textContent = "Director:";

	const pDirector = document.createElement("p");
	pDirector.classList.add("movie-card-details__director");
	pDirector.textContent = movie.Director;

	divDirector.append(h4Director, pDirector);

	const divActors = document.createElement("div");
	divActors.classList.add("movie-card-details__item");

	const h4Actors = document.createElement("h4");
	h4Actors.classList.add("movie-card-details__label");
	h4Actors.textContent = "Actors:";

	const pActors = document.createElement("p");
	pActors.classList.add("movie-card-details__actors");
	pActors.textContent = movie.Actors;

	divActors.append(h4Actors, pActors);

	const divAwards = document.createElement("div");
	divAwards.classList.add("movie-card-details__item");

	const h4Awards = document.createElement("h4");
	h4Awards.classList.add("movie-card-details__label");
	h4Awards.textContent = "Awards:";

	const pAwards = document.createElement("p");
	pAwards.classList.add("movie-card-details__awards");
	pAwards.textContent = movie.Awards;

	divAwards.append(h4Awards, pAwards);

	const divCountry = document.createElement("div");
	divCountry.classList.add("movie-card-details__item");

	const h4Country = document.createElement("h4");
	h4Country.classList.add("movie-card-details__label");
	h4Country.textContent = "Country:";

	const pCountry = document.createElement("p");
	pCountry.classList.add("movie-card-details__country");
	pCountry.textContent = movie.Country;

	divCountry.append(h4Country, pCountry);

	const divGenre = document.createElement("div");
	divGenre.classList.add("movie-card-details__item");

	const h4Genre = document.createElement("h4");
	h4Genre.classList.add("movie-card-details__label");
	h4Genre.textContent = "Genre:";

	const pGenre = document.createElement("p");
	pGenre.classList.add("movie-card-details__genre");
	pGenre.textContent = movie.Genre;

	divGenre.append(h4Genre, pGenre);

	const sRatings = document.createElement("section");
	sRatings.classList.add("movie-card-details__ratings-list");

	const ratingsElement = createRatings(movie.Ratings);
	sRatings.append(ratingsElement);

	divWrapperPoster.append(imgPoster, btnBack);

	divInfoMovie.append(
		divDirector,
		divActors,
		divAwards,
		divCountry,
		divGenre,
		sRatings,
	);

	articleCardDetails.append(divWrapperPoster, divInfoMovie);

	if (movie.Poster === "N/A") {
		imgPoster.src = "./images/noPoster.svg";
	} else {
		imgPoster.src = movie.Poster;
		imgPoster.onerror = () => {
			imgPoster.src = "./images/noPoster.svg";
		};
	}

	return articleCardDetails;
}

export function createMovieCard(movie) {
	const articlMovCard = document.createElement("article");
	articlMovCard.classList.add("movie-card");
	articlMovCard.dataset.movieId = movie.imdbID;
	const btnMovCard = document.createElement("button");
	btnMovCard.classList.add("movie-card__favorite");
	btnMovCard.type = "button";
	btnMovCard.setAttribute("aria-label", "Add to favorites");
	btnMovCard.textContent = "♡";
	const imgMovCard = document.createElement("img");
	imgMovCard.classList.add("movie-card__poster");

	if (movie.Poster === "N/A") {
		imgMovCard.src = "./images/noPoster.svg";
	} else {
		imgMovCard.src = movie.Poster;
		imgMovCard.onerror = () => {
			imgMovCard.src = "./images/noPoster.svg";
		};
	}

	imgMovCard.alt = movie.Title + " Poster";
	const divMovieContent = document.createElement("div");
	divMovieContent.classList.add("movie-card__content");
	const hTitleCard = document.createElement("h2");
	hTitleCard.classList.add("movie-card__title");
	const divMovCardMeta = document.createElement("div");
	divMovCardMeta.classList.add("movie-card__meta");
	const sMovieYear = document.createElement("span");
	sMovieYear.classList.add("movie-card__year");
	const sMovieType = document.createElement("span");
	sMovieType.classList.add("movie-card__type");
	sMovieType.textContent = movie.Type;
	sMovieYear.textContent = movie.Year;
	divMovCardMeta.append(sMovieYear, sMovieType);
	hTitleCard.textContent = movie.Title;
	divMovieContent.append(hTitleCard, divMovCardMeta);
	articlMovCard.append(btnMovCard, imgMovCard, divMovieContent);
	return articlMovCard;
}

export function createRatings(ArrRatings) {
	const divRatings = document.createElement("div");
	divRatings.classList.add("movie-card-details__ratings");

	const h4Ratings = document.createElement("h4");
	h4Ratings.classList.add("movie-card-details__label");
	h4Ratings.textContent = "Rating:";

	const ulRatings = document.createElement("ul");
	ulRatings.classList.add("movie-card-details__ratings-items");

	for (const rating of ArrRatings) {
		const liRating = document.createElement("li");
		liRating.classList.add("movie-card-details__ratings-item");

		const pSource = document.createElement("p");
		pSource.classList.add("movie-card-details__rating-source");
		pSource.textContent = rating.Source;

		const pValue = document.createElement("p");
		pValue.classList.add("movie-card-details__rating-value");
		pValue.textContent = rating.Value;

		liRating.append(pSource, pValue);
		ulRatings.append(liRating);
	}

	divRatings.append(h4Ratings, ulRatings);

	return divRatings;
}
