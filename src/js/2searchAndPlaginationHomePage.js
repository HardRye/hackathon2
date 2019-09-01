let inputValue = document.querySelector('.search-form__input').value;
const input = document.querySelector('.search-form__input');
const form = document.querySelector('.search-form');
const btnPrev = document.querySelector('.page_prev');
const btnNext = document.querySelector('.page_next');
const btnPageNumber = document.querySelector('.number_page');


// pageNumber = 1;



function fetchFilms() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e008f5d338cd1f22f432e50e537417d&language=en-US&query=${inputValue}&page=${pageNumber}&include_adult=false`)
        .then(response => response.json())
        .then(data => {
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
                    const moviePath = `https://image.tmdb.org/t/p/w400/${el.backdrop_path}`;
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

    fetchFilms();

    e.target.reset();
}

searchForm.addEventListener('submit', searchFilms);