const btnHome = document.querySelector('.header__link--home');
const btnLibrary = document.querySelector('.header__link--library');
const sectionMain = document.querySelector('.home-page');
const sectionCard = document.querySelector('.card');
const sectionLibrary = document.querySelector('main > .myFilmLibraryPage__container');
const btnFavourites = document.querySelector('.myFilmLibraryPage__buttonFavourites');
const btnQueue = document.querySelector('.myFilmLibraryPage__buttonQueue');
const btnAddToFavourite = document.querySelector('.card-details__AddToFavourite');
const btnRemoveFromFavourite = document.querySelector('.card-details__RemoveFromFavourite');
const btnAddToQueue = document.querySelector('.card-details__AddToQueue');
const btnRemoveFromQueue = document.querySelector('.card-details__RemoveFromQueue');
const headerNav = document.querySelector('.header__nav');
const headerLogo = document.querySelector('.header__logo');

let selectFilm;

function activeHomePage() {
  sectionCard.classList.add('non-active-section');
  sectionLibrary.classList.add('non-active-section');
  sectionMain.classList.remove('non-active-section');
}

function activeLibraryPage() {
  sectionCard.classList.add('non-active-section');
  sectionMain.classList.add('non-active-section');
  sectionLibrary.classList.remove('non-active-section');
}

function activeDetailsPageListener(e) {
  sectionCard.classList.remove('non-active-section');
  sectionMain.classList.add('non-active-section');
  sectionLibrary.classList.add('non-active-section');
  console.log(e.target.dataset.id);
  console.log(e.currentTarget.dataset.name);
  if (e.currentTarget.dataset.name === 'home') {
    activeDetailsPage(e.target.dataset.id, false);
    console.log(e.target.dataset.id);
  } else if (e.currentTarget.dataset.name === 'library') {
    activeDetailsPage(e.target.dataset.id, true);
  }
}

function activeDetailsPage(movieId, itsLibraryFilm) {
  console.log('renderFilms ', renderFilms);
  if(itsLibraryFilm) {
    try {
      const filmsFromLocalQueue = localStorage.getItem('filmsQueue');
      return filmsFromLocalQueue === null ? undefined : JSON.parse(filmsFromLocalQueue);
    } catch (err) {
      console.error(err);
    }
    selectFilm = filmsFromLocalQueue.find(item => item.id === movieId);
    if(!selectFilm) {
      try {
        const filmsFromLocalWatched = localStorage.getItem('filmsWatched');
        return filmsFromLocalWatched === null ? undefined : JSON.parse(filmsFromLocalWatched);
      } catch (err) {
        console.error(err);
      }
      selectFilm = filmsFromLocalWatched.find(item => item.id === movieId);
    }
  } else {
    console.log(renderFilms);
    selectFilm = renderFilms.find(item => item.id === movieId);
  }
  showDetails(selectFilm);
}

function chooseActiveLink(evt) {
  evt.preventDefault();
  if(evt.target.classList.contains('header__link')) {
    const currentActiveItem = headerNav.querySelector('.header__link--active');
        if(currentActiveItem) {
          currentActiveItem.classList.remove('header__link--active');
        }
        evt.target.classList.add('header__link--active');
  }
}

activeHomePage();

btnHome.addEventListener('click', activeHomePage);
headerLogo.addEventListener('click', activeHomePage);
btnLibrary.addEventListener('click', activeLibraryPage);
headerNav.addEventListener('click', chooseActiveLink);
