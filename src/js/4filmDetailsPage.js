const detailsCard = document.querySelector('.card-details');
const actionBtnsForm = document.querySelector('.card-details__actions');
const posterImg = detailsCard.querySelector('.card-details__img');
const cardDetailsTitle = detailsCard.querySelector('.card-details__title');
const cardDetailsVotes = detailsCard.querySelector(
  '.card-details__votes--value',
);
const cardDetailsPopularity = detailsCard.querySelector(
  '.card-details__popularity--value',
);
const cardDetailsName = detailsCard.querySelector('.card-details__name--value');
const cardDetailsGenre = detailsCard.querySelector(
  '.card-details__genre--value',
);
const cardDetailsAbout = detailsCard.querySelector(
  '.card-details__about--text',
);

const addToFavBtn = actionBtnsForm.querySelector(
    "button[data-action='add-to-favorite']",
);
const delFromFavBtn = actionBtnsForm.querySelector(
    "button[data-action='delete-from-favorite']",
);
const addToQueueBtn = actionBtnsForm.querySelector(
    "button[data-action='add-to-queue']",
);
const delFromQueueBtn = actionBtnsForm.querySelector(
    "button[data-action='delete-from-queue']",
);

let filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
let filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));

const toggleBtn = (btnToShow, btnToHide) => {
    btnToShow.classList.remove('hide');
    btnToShow.classList.add('show');
    btnToHide.classList.remove('show');
    btnToHide.classList.add('hide');
};

const monitorButtonStatusText = () => {
  if (filmsQueue && filmsQueue.find(film => film.id === selectFilm.id)) {
    toggleBtn(delFromQueueBtn, addToQueueBtn);
  } else {
    toggleBtn(addToQueueBtn, delFromQueueBtn);
  }

  if (filmsWatched && filmsWatched.find(film => film.id === selectFilm.id)) {
    toggleBtn(delFromFavBtn, addToFavBtn);
  } else {
    toggleBtn(addToFavBtn, delFromFavBtn);
  }
};

const toggleToQueue = ({ target }) => {
  if (
    target.parentNode.dataset.action !== 'add-to-queue' &&
    target.parentNode.dataset.action !== 'delete-from-queue'
  )
    return;
  if (!filmsQueue) filmsQueue = [];

  if (filmsQueue.find(film => film.id === selectFilm.id)) {
    filmsQueue = filmsQueue.filter(film => film.id !== selectFilm.id);
  } else {
    filmsQueue.push(selectFilm);
  }

  if (filmsQueue.length) {
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    localStorage.removeItem('filmsQueue');
  }

  monitorButtonStatusText();
};

const toggleToWatched = ({ target }) => {
  if (
    target.parentNode.dataset.action !== 'add-to-favorite' &&
    target.parentNode.dataset.action !== 'delete-from-favorite'
  )
    return;
  if (!filmsWatched) filmsWatched = [];

  if (filmsWatched.find(film => film.id === selectFilm.id)) {
    filmsWatched = filmsWatched.filter(film => film.id !== selectFilm.id);
  } else {
    filmsWatched.push(selectFilm);
  }

  if (filmsWatched.length) {
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  } else {
    localStorage.removeItem('filmsWatched');
  }

  monitorButtonStatusText();
};

const showDetails = selectFilm => {
  detailsCard.dataset.id = selectFilm.id;
  posterImg.src = selectFilm.poster_path;
  posterImg.alt = selectFilm.original_title;
  cardDetailsTitle.textContent = selectFilm.original_title;
  cardDetailsVotes.textContent = `${selectFilm.vote_average} / ${selectFilm.vote_count}`;
  cardDetailsPopularity.textContent = selectFilm.popularity;
  cardDetailsName.textContent = selectFilm.original_title;

  cardDetailsGenre.textContent = selectFilm.genre_ids
    .map(genreId => genreId)
    .map(id => genres.find(genre => genre.id === id))
    .reduce((acc, film) => {
      acc + film.name;
    }, '');

  cardDetailsAbout.textContent = selectFilm.overview;

  monitorButtonStatusText();
};

actionBtnsForm.addEventListener('click', toggleToQueue);
actionBtnsForm.addEventListener('click', toggleToWatched);