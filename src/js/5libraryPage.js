const favouriteButton = document.querySelector(
  '.myFilmLibraryPage__buttonFavourites',
);
const queueButton = document.querySelector('.myFilmLibraryPage__buttonQueue');

const drawWatchedFilmList = function() {
  // favouriteButton.classList.add('button__colored');/**///////////////////////////////////////// */
  let fragment;
  const add = localStorage.setItem('filmsWatched', [1, 2, 3]); /*/*/ //////
  const favouriteMovies = localStorage.getItem('filmsWatched');
  if (favouriteMovies.length === 0) {
    return alert('You do not have watched movies. Add them.');
  }
  fragment = favouriteMovies.map(el => createLibraryCardFunc(el));
};

favouriteButton.addEventListener('click', drawWatchedFilmList);
