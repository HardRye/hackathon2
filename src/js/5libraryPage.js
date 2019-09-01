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

const favouriteButton = document.querySelector(
  '.myFilmLibraryPage__buttonFavourites',
);
const queueButton = document.querySelector('.myFilmLibraryPage__buttonQueue');

const drawWatchedFilmList = function() {
  // favouriteButton.classList.add('button__colored');/**///////////////////////////////////////// */
  const fragment = document.createDocumentFragment();

  localStorage.setItem('filmsWatched', [
    {
      id: 99861,
      backdrop_path: '/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg',
      original_title: 'Avengers: Age of Ultron',
      vote_average: 7.3,
    },
    {
      id: 228150,
      vote_average: 7.4,
      backdrop_path: '/pKawqrtCBMmxarft7o1LbEynys7.jpg',
      original_title: 'Title 2',
    },
  ]); /*/*/ //////

  const favouriteMovies = localStorage.getItem('filmsWatched');
  if (favouriteMovies.length === 0 || favouriteMovies === null) {
    return alert('You do not have watched movies. Add them.');
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
  films.innerHTML = '';
  films.append(fragment);
  // films.addEventListener('click', (id, b) => activeDetailsPage(id, true));
};

favouriteButton.addEventListener('click', drawWatchedFilmList);
