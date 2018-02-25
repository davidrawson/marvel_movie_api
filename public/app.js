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

//Movie selector
  const movieSelector = document.getElementById('movie-picker');
  movieSelector.addEventListener('change', pickMovie);
  populateDropdown(movieSelector);

//Chart
  const chartButton = document.getElementById('chart-button');
  chartButton.addEventListener('click', displayChart);

  const chartName = "Marvel Studios: Gross Earnings per Movie";
  const grosses = [];
  const names = [];
  movies.forEach(function(movie){
    grosses.push(movie.gross);
    names.push(movie.name);
  })

  new GrossChart(chartName, grosses, names);

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
  document.location.reload(false);
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
  displayMovie(movieArray);
}


//Display results:
const displayMovie = function(array){
  postImage('poster', array.Poster, array.Title)
  postTextItem('movie-title', 'h3', array.Title);
  postTextItem('attributes', 'li', "Director: " + array.Director);
  postTextItem('attributes', 'li', "Genre: " + array.Genre);
  postTextItem('attributes', 'li', "Rating: " + array.Rated);
  postTextItem('attributes', 'li', "Box Office: " + array.BoxOffice);
  postTextItem('attributes', 'li', "MetaScore: " + array.Metascore +"/100");
  postTextItem('cast', 'p', "Cast: " + array.Actors)
  postTextItem('plot', 'p', array.Plot);
}

const postImage = function(parent, src, alt){
  const targetParent = document.getElementById(parent);
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  appendItems(targetParent, image);
}

const postTextItem = function(parent, type, text){
  const targetParent = document.getElementById(parent);
  const child = document.createElement(type)
  child.innerText = text
  appendItems(targetParent, child);
}

const appendItems = function(parent, child){
  parent.appendChild(child);
}


//Chart display button handling:
const displayChart = function(){
  const button = document.getElementById('chart-button')
  const chartDiv = document.querySelector('#gross-chart');
  const style = window.getComputedStyle(chartDiv);
  const display = style.getPropertyValue('display');

  if(display === "none"){
    chartDiv.style.display = "block";
    button.innerText = "Hide"
  } else {
    chartDiv.style.display = "none";
    button.innerText = "View Earnings by Movie"
  }
}

document.addEventListener('DOMContentLoaded', app);
