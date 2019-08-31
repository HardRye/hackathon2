const detailsCard = document.querySelector('.card');
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
let filmsFavorite = JSON.parse(localStorage.getItem('filmsFavorite'));

const toggleBtn = (btnToShow, btnToHide) => {
  btnToShow.classList.remove('hide');
  btnToShow.classList.add('show');
  btnToHide.classList.remove('show');
  btnToHide.classList.add('hide');
};
//try
const selectFilm = {
  id: '123',
};
//try
detailsCard.dataset.id = selectFilm.id;

const monitorButtonStatusText = () => {
  if (filmsQueue && filmsQueue.includes(detailsCard.dataset.id)) {
    toggleBtn(delFromQueueBtn, addToQueueBtn);
  } else {
    toggleBtn(addToQueueBtn, delFromQueueBtn);
  }

  if (filmsFavorite && filmsFavorite.includes(detailsCard.dataset.id)) {
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

  switch (target.parentNode.dataset.action) {
    case 'add-to-queue':
      toggleBtn(delFromQueueBtn, addToQueueBtn);
      break;
    case 'delete-from-queue':
      toggleBtn(addToQueueBtn, delFromQueueBtn);
      break;
  }

  if (filmsQueue.includes(detailsCard.dataset.id)) {
    filmsQueue = filmsQueue.filter(id => id !== detailsCard.dataset.id);
    console.log(filmsQueue);
  } else {
    filmsQueue.push(detailsCard.dataset.id);
  }

  if (filmsQueue.length) {
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    localStorage.removeItem('filmsQueue');
  }
};

const toggleFavorites = ({ target }) => {
  if (
    target.parentNode.dataset.action !== 'add-to-favorite' &&
    target.parentNode.dataset.action !== 'delete-from-favorite'
  )
    return;
  if (!filmsFavorite) filmsFavorite = [];

  switch (target.parentNode.dataset.action) {
    case 'add-to-favorite':
      toggleBtn(delFromFavBtn, addToFavBtn);
      break;
    case 'delete-from-favorite':
      toggleBtn(addToFavBtn, delFromFavBtn);
      break;
  }

  if (filmsFavorite.includes(detailsCard.dataset.id)) {
    filmsFavorite = filmsFavorite.filter(id => id !== detailsCard.dataset.id);
    console.log(filmsFavorite);
  } else {
    filmsFavorite.push(detailsCard.dataset.id);
  }

  if (filmsFavorite.length) {
    localStorage.setItem('filmsFavorite', JSON.stringify(filmsFavorite));
  } else {
    localStorage.removeItem('filmsFavorite');
  }
};

monitorButtonStatusText();

actionBtnsForm.addEventListener('click', toggleToQueue);
actionBtnsForm.addEventListener('click', toggleFavorites);
