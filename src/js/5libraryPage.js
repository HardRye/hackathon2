const films = document.querySelector('.myFilmLibraryPage__film-card');

const createLibraryCardFunc = function(
  imgPath,
  filmTitle,
  movieId,
  voteAverage,
) {
  const card = document.createElement('li');
  card.classList.add('film');
  card.classList.add('data-id', movieId);
  const image = document.createElement('img');
  image.setAttribute('src', imgPath);
  const title = document.createElement('h2');
  title.classList.add('myFilmLibraryPage__film-title');
  title.textContent = filmTitle;
  const rating = document.createElement('div');
  rating.classList.add('myFilmLibraryPage__rating');
  rating.textContent = voteAverage;
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(rating);
  // card.addEventListener("click", activeDetailsPage(movieId, true))
};

const favouriteButton = document.querySelector(
  '.myFilmLibraryPage__buttonFavourites',
);
const queueButton = document.querySelector('.myFilmLibraryPage__buttonQueue');

const drawWatchedFilmList = function() {
  // favouriteButton.classList.add('button__colored');/**///////////////////////////////////////// */
  let fragment;
  const add = localStorage.setItem('filmsWatched', [1, 2, 3]); /*/*/ //////
  const favouriteMovies = localStorage.getItem('filmsWatched');
  if (favouriteMovies.length === 0 || favouriteMovies === null) {
    return alert('You do not have watched movies. Add them.');
  }
  fragment = favouriteMovies.map(el => createLibraryCardFunc(el));
  films.innerHTML = fragment;
};

favouriteButton.addEventListener('click', drawWatchedFilmList);
