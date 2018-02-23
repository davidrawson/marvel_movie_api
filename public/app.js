const app = function(){

  let movieId = "tt1825683";

  const url = " http://www.omdbapi.com/?i=" + movieId + "&apikey=" + API_KEY;

  makeRequest(url, requestComplete);

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

//movieId = result of whichever option is picked

document.addEventListener('DOMContentLoaded', app);
