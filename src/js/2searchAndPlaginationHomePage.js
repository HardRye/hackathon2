let inputValue = document.querySelector('.search-form__input').value;
const input = document.querySelector('.search-form__input');
const form = document.querySelector('.search-form');
const btnPrev = document.querySelector('.page_prev');
const btnNext = document.querySelector('.page_next');
const btnPageNumber = document.querySelector('.number_page');
const containerBtn = document.querySelector('.button_page');

pageNumber = 1;
let findFilms = [];
btnPageNumber.innerText = pageNumber;

if (pageNumber === 1) {
    btnPrev.classList.add('disable')
}


function fetchFilms() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e008f5d338cd1f22f432e50e537417d&language=en-US&query=${inputValue}&page=${pageNumber}&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            findFilms = data.results;
        //    console.log(findFilms);
            if (!data.results.length) {
                const warning = document.createElement('p');
                warning.classList.add('warning');
                warning.textContent = 'Enter correct query!!!';

                document.querySelector('.search').insertBefore(warning, document.querySelector('.filmList'));

                setTimeout(() => {
                    warning.remove();
                }, 2000);
            } else {
                document.querySelector('.filmList').innerHTML = '';


                data.results.map(el => {
                    const moviePath = `${el.backdrop_path}`;
                    const movieTitle = `${el.title} (${el.release_date.slice(0, 4)})`;
                    const movieId = el.id;

                    document.querySelector('.filmList').appendChild(createCardFunc(moviePath, movieTitle, movieId));
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
}



function searchFilms(e) {
    e.preventDefault();

    inputValue = input.value;
    pageNumber = 1;
    btnPageNumber.innerText = pageNumber;
    btnPrev.classList.remove('active');
    btnPrev.classList.add('disable');

    fetchFilms();

    e.target.reset();
}




function plaginationNavigation(e) {
    if (e.target.classList.contains('page_prev')) {
        if (pageNumber > 1) {
            btnPageNumber.innerText--;
            pageNumber--;

            if (inputValue) {
                fetchFilms();
            } else fetchPopularMoviesList(pageNumber);



            if (pageNumber === 1) {
                btnPrev.classList.remove('active');
                btnPrev.classList.add('disable');
            }

        }
    }

    if (e.target.classList.contains('page_next')) {
        btnPrev.classList.add('active');
        btnPageNumber.innerText++;
        pageNumber++;

        if (inputValue) {
            fetchFilms();
        } else fetchPopularMoviesList(pageNumber);
    }
}

form.addEventListener('submit', searchFilms);
containerBtn.addEventListener('click', plaginationNavigation);
