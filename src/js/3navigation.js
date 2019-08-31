const btnHome = document.querySelector('.header__link--home');
const btnLibrary = document.querySelector('.header__link--library');
const sectionMain = document.querySelector('.main');
const sectionCard = document.querySelector('.card');
const sectionLibrary = document.querySelector('.myFilmLibraryPage__container');
const btnFavourites = document.querySelector('.myFilmLibraryPage__buttonFavourites');
const btnQueue = document.querySelector('.myFilmLibraryPage__buttonQueue');
const btnAddToFavourite = document.querySelector('.card-details__AddToFavourite');
const btnRemoveFromFavourite = document.querySelector('.card-details__RemoveFromFavourite');
const btnAddToQueue = document.querySelector('.card-details__AddToQueue');
const btnRemoveFromQueue = document.querySelector('.card-details__RemoveFromQueue');
const headerNav = document.querySelector('.header__nav');

let selectFilm;

const activeHomePage = () => {
  sectionCard.classList.add('non-active-section');
  sectionLibrary.classList.add('non-active-section');
}

const chooseActiveLink = evt => {
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
headerNav.addEventListener('click', chooseActiveLink);
