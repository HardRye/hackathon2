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

  if (localStorage.getItem('filmsWatched') === null) {
    const fragment = document.createDocumentFragment();
    const emptyStorage = document.createElement('h2');
    emptyStorage.classList.add('storage__empty');
    emptyStorage.textContent = 'You do not have favourite movies. Add them.';

    fragment.append(emptyStorage);
    films.innerHTML = '';
    films.append(fragment);
    return;
  }

  const favouriteMovies = JSON.parse(localStorage.getItem('filmsWatched'));

  if (favouriteMovies.length === 0) {
    const fragment = document.createDocumentFragment();

    const emptyStorage = document.createElement('h2');
    emptyStorage.classList.add('storage__empty');
    emptyStorage.textContent = 'You do not have favourite movies. Add them.';
    fragment.append(emptyStorage);
    films.innerHTML = '';
    films.append(fragment);
    return;
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
    const fragment = document.createDocumentFragment();

    const emptyStorage = document.createElement('h2');
    emptyStorage.classList.add('storage__empty');
    emptyStorage.textContent =
      'You do not have to queue movies to watch. Add them.';

    fragment.append(emptyStorage);
    films.innerHTML = '';
    films.append(fragment);
    return;
  }

  const queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));

  if (queueMovies.length === 0) {
    const fragment = document.createDocumentFragment();

    const emptyStorage = document.createElement('h2');
    emptyStorage.classList.add('storage__empty');
    emptyStorage.textContent =
      'You do not have to queue movies to watch. Add them.';
    fragment.append(emptyStorage);
    films.innerHTML = '';
    films.append(fragment);
    return;
  }

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

document.querySelector('footer__link');
