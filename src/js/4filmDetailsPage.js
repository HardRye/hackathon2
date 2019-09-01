const detailsCard = document.querySelector('.film-card');
const actionBtnsForm = document.querySelector('.card-details__actions');
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

//try
const selectFilm1 = {
  id: '123',
};
//try

detailsCard.dataset.id = selectFilm1.id;

const monitorButtonStatusText = () => {
  if (filmsQueue && filmsQueue.find(film => film.id === selectFilm1.id)) {
    toggleBtn(delFromQueueBtn, addToQueueBtn);
  } else {
    toggleBtn(addToQueueBtn, delFromQueueBtn);
  }

  if (filmsWatched && filmsWatched.find(film => film.id === selectFilm1.id)) {
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

  if (filmsQueue.find(film => film.id === selectFilm1.id)) {
    filmsQueue = filmsQueue.filter(film => film.id !== selectFilm1.id);
    console.log(filmsQueue);
  } else {
    filmsQueue.push(selectFilm1);
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

  if (filmsWatched.find(film => film.id === selectFilm1.id)) {
    filmsWatched = filmsWatched.filter(film => film.id !== selectFilm1.id);
    console.log(filmsWatched);
  } else {
    filmsWatched.push(selectFilm1);
  }

  if (filmsWatched.length) {
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  } else {
    localStorage.removeItem('filmsWatched');
  }

  monitorButtonStatusText();
};

monitorButtonStatusText();

actionBtnsForm.addEventListener('click', toggleToQueue);
actionBtnsForm.addEventListener('click', toggleToWatched);
