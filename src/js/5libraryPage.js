const films = document.querySelector('.myFilmLibraryPage__film-card');
const favouriteButton = document.querySelector(
  '.myFilmLibraryPage__buttonFavourites',
);
const queueButton = document.querySelector('.myFilmLibraryPage__buttonQueue');

const createLibraryCardFunc = function(
  imgPath,
  filmTitle,
  movieId,
  voteAverage,
) {
  const card = document.createElement('li');
  card.classList.add('film');
  card.setAttribute('data-id', movieId);

  const image = document.createElement('img');
  image.setAttribute('src', 'https://image.tmdb.org/t/p/' + 'w500' + imgPath);
  image.setAttribute('alt', filmTitle);

  const title = document.createElement('p');
  title.classList.add('myFilmLibraryPage__film-title');
  title.textContent = filmTitle;
  const rating = document.createElement('div');
  rating.classList.add('myFilmLibraryPage__rating');
  rating.textContent = voteAverage;
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(rating);
  return card;
};

const drawWatchedFilmList = function() {
  favouriteButton.classList.remove('button__white');
  favouriteButton.classList.add('button__colored');
  queueButton.classList.remove('button__colored');
  queueButton.classList.add('button__white');
  const fragment = document.createDocumentFragment();
  // console.log(localStorage.getItem('filmsWatched'));
  // const favouriteMovies = JSON.parse(localStorage.getItem('filmsWatched'));
  if (localStorage.getItem('filmsWatched') === null) {
    return console.log(
      'You do not have watched movies. Add them.',
    ); /******************** */
  }
  const favouriteMovies = JSON.parse(localStorage.getItem('filmsWatched'));
  if (favouriteMovies.length === 0) {
    return console.log('You do not have watched movies. Add them.');
  }
  favouriteMovies.forEach(el =>
    fragment.append(
      createLibraryCardFunc(
        el.backdrop_path,
        el.original_title,
        el.id,
        el.vote_average,
      ),
    ),
  );
  films.setAttribute('data-name', 'favourites');
  films.innerHTML = '';
  films.append(fragment);
  films.addEventListener('click', activeDetailsPageListener);
};

const drawQueueFilmList = function() {
  queueButton.classList.remove('button__white');
  queueButton.classList.add('button__colored');
  favouriteButton.classList.remove('button__colored');
  favouriteButton.classList.add('button__white');
  const fragment = document.createDocumentFragment();

  if (localStorage.getItem('filmsQueue') === null) {
    return console.log(
      'You do not have to queue movies to watch. Add them.',
    ); /******************** */
  }
  const queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));
  if (queueMovies.length === 0) {
    return console.log('You do not have to queue movies to watch. Add them.');
  } /************************ */
  // const queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));
  // if (queueMovies === null || queueMovies.length === 0) {
  //   return console.log(
  //     'You do not have to queue movies to watch. Add them.',
  //   );
  // }
  queueMovies.forEach(el =>
    fragment.append(
      createLibraryCardFunc(
        el.backdrop_path,
        el.original_title,
        el.id,
        el.vote_average,
      ),
    ),
  );
  films.setAttribute('data-name', 'queue');
  films.innerHTML = '';
  films.append(fragment);
  films.addEventListener('click', activeDetailsPageListener);
};

favouriteButton.addEventListener('click', drawWatchedFilmList);
queueButton.addEventListener('click', drawQueueFilmList);

// films.addEventListener('click');

// films.addEventListener('click', (id, b) => activeDetailsPage(id, true));
