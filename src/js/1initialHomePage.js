// const URL = 'https://api.themoviedb.org/3/movie/550?api_key=9675092798f3a490a8c4d8f2cf77169b'

// fetch(URL)
//   .then(data => console.log(data))
//   .catch(console.log)


// const URL2 = 'https://api.themoviedb.org/3/discover/movie?with_people=108916,7467&sort_by=popularity.desc'

// fetch(URL2)
//   .then(responce => responce.json())
//   .then(data => console.log(data))
//   .catch(console.log)




// - создаем глобальные переменные renderFilms и genres, pageNumber (будет использоваться в запросе при плагинации); 
let renderFilms;
let genres;
let pageNumber;


const createCardFunc = (imgPath, filmTitle, movieId) => {
  // - создаем функцию createCardFunc, она принимает параметрами imgPath, filmTitle, movieId создает li согласно макета, вешает на нее слушателем функцию activeDetailsPage c параметрами movieId и флагом false так как фильм из библиотеки (смотри пункт “3)” создание activeDetailsPage);

}

const fetchPopularMoviesList = () => {
  // - создаем функцию fetchPopularMoviesList (должна в запросе в виде переменной использовать pageNumber) в которой используется createCardFunc результат используя fragment кладем в ul, и не забываем заполнить этими же данными переменную renderFilms (она понадобится в работе следующим участникам); 

}

const fetchGenres = () => {
  // - создаем функцию fetchGenres которая забирает жанры и кладет их в переменную genres (она понадобится в работе следующим участникам); 
}



// - запускаем функцию fetchPopularMoviesList и fetchGenres. 
fetchPopularMoviesList();
fetchGenres();