const app = function(){

  const lastMovieId = localStorage.getItem('last movie')

  let movieId = null;

  if(lastMovieId === null){
    movieId = "tt1825683";
  } else {
    movieId = lastMovieId;
  }
  const url = " http://www.omdbapi.com/?i=" + movieId + "&apikey=" + API_KEY;

  makeRequest(url, requestComplete);

  const movieSelector = document.getElementById('movie-picker');
  movieSelector.addEventListener('change', pickMovie);
  populateDropdown(movieSelector);



}
//Movie picker dropdown
const populateDropdown = function(parent){
  movies.forEach(function(movie){
    const movieOption = document.createElement('option');
    movieOption.innerText = movie.name;
    movieOption.value = movie.id;
    parent.appendChild(movieOption);
  })
}

const pickMovie = function(){
  movieId = this.value;
  localStorage.setItem('last movie', this.value)
  // document.location.reload(false);
}


//API access:
const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const movieArray = JSON.parse(jsonString);
  console.log(movieArray);
  localStorage.setItem('Movie API', movieArray);
  return movieArray;
}

//Display results:


//Movie picker:
//Use movieNames to populate programmatically

//movieId = result of whichever option is picked

document.addEventListener('DOMContentLoaded', app);
