let inputValue = document.querySelector('.search-form__input').value;
const input = document.querySelector('.search-form__input');
const form = document.querySelector('.search-form');
const btnPrev = document.querySelector('.page_prev');
const btnNext = document.querySelector('.page_next');
const btnPageNumber = document.querySelector('.number_page');

// if (pageNumber === 1) {
//     btnPrev.classList.add('disable');
// }

// console.dir(paginationTxt);
// paginationTxt.innerText = pageNumber;

// function fetchFilms() {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e008f5d338cd1f22f432e50e537417d&language=en-US&query=${inputValue}&page=1&include_adult=false`)
//         .then(response => response.json)
//     if (!data.results.length) {
//         const warning = document.createElement('p');
//         warning.classList.add('warning');
//         warning.textContent = 'Enter correct query!!!';


//     }




// function searchFilms(e) {
//     e.preventDefault();

//     inputValue = input.value;

//     fetchFilms();

//     e.target.reset();
// }