const app = function(){

  let movieId = "tt1825683";

  const url = " http://www.omdbapi.com/?i=" + movieId + "&apikey=" + API_KEY;
  populateDropdown();
  makeRequest(url, requestComplete);

}
//Populate movie picker dropdown
const populateDropdown = function(){
  const movieSelector = document.getElementById('movie-picker');
  movies.forEach(function(movie){
    const movieOption = document.createElement('option');
    movieOption.innerText = movie.name;
    movieOption.value = movie.id;
    movieSelector.appendChild(movieOption);
  })
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
