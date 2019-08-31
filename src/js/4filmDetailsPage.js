const detailsCard = document.querySelector('.card');
const actionBtnsForm = document.querySelector('.card-details__actions');
const addToFavBtn = actionBtnsForm.querySelector("button[data-action='add-to-favorite']");
const delFromFavBtn = actionBtnsForm.querySelector("button[data-action='delete-from-favorite']");
const addToQueueBtn = actionBtnsForm.querySelector("button[data-action='add-to-queue']");
const delFromQueueBtn = actionBtnsForm.querySelector("button[data-action='delete-from-queue']");

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
  if (
    filmsQueue &&
    filmsQueue.includes(detailsCard.dataset.id)
  ) {
    toggleBtn(delFromQueueBtn, addToQueueBtn);
  } else {
    toggleBtn(addToQueueBtn, delFromQueueBtn);
  }

  if (
    filmsFavorite &&
    filmsFavorite.includes(detailsCard.dataset.id)
  ) {
    toggleBtn(delFromFavBtn, addToFavBtn);
  } else {
    toggleBtn(addToFavBtn, delFromFavBtn);
  }
};

const toggleToQueue = ({ target }) => {
  if (target.parentNode.nodeName !== 'BUTTON') return;
  if (!filmsQueue) filmsQueue = [];
  switch (target.parentNode.dataset.action) {
    case 'add-to-queue':
      toggleBtn(delFromQueueBtn, addToQueueBtn);
      break;
    case 'delete-from-queue':
      toggleBtn(addToQueueBtn, delFromQueueBtn);
      break;
  }
  filmsQueue = filmsQueue.includes(detailsCard.dataset.id)
    ? filmsQueue.map(id => id !== detailsCard.dataset.id)
    : filmsQueue.push(detailsCard.dataset.id);
  localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
};

monitorButtonStatusText();

actionBtnsForm.addEventListener('click', toggleToQueue);
