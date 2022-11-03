/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
// loop through array & return all titles
// we want to return an array of strings (movie titles)
// if no title, want empty array


function getAllMovieTitles(movies){
  let titlesarr = [] 
for (let i = 0; i < movies.length; i ++){
  titlesarr.push(movies[i].title)
} return titlesarr;
  }




/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
// loop through movies & grab only metascore rating
// find average & return as a number (add all values & divide by .length)
// if empty, return []



function getHighestMetascore(movies,) {
  let metascorenum = 0
for (let i = 0; i < movies.length; i ++){
  if (movies[i].metascore > metascorenum){
    metascorenum = movies[i].metascore
  }
} 
return Number(metascorenum);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
 // loop through movies & grab all IMDB ratings
 // Add ratings & divide by ratings.length
 // currently returning array with all ratings
 // with extra time figure out how to add(accumulator?) & divide by length

function getAverageIMDBRating(movies) {
  let IMBDavg = 0
  imbdarr = []
  let newArr = []
for (let i = 0; i < movies.length; i++){
   IMBDavg += (movies[i].imdbRating)
} imbdarr.push(IMBDavg)
imbdarr += (IMBDavg / IMBDavg.length)
return newArr;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

// loop through & find movie ratings (key)
// # of movies in the array with that rating (value)


function countByRating(movies) {
  for (let i = 0; i < movies.length; i ++){
   
  }
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
// finds matching imbdID & returns corresponding movie
// if array is empty or does not have a match return null 
// loop through & check for matching imbdID id 
// 



function findById(movies,id) {
  let imbdMatches = {}
  for (let i = 0; i < movies.length; i++){
if (movies[i].imbdID.includes(id)){
  imbdMatches = movies[i].title
}
} return imbdMatches;
}





/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
// loop through movies
// check for match with genre (genere has multiple strings)
// if no match return empty array
function filterByGenre(movies, genre) {
  let genrearr = [] //should have movies with matching genre types
 for (let i = 0; i < movies.length; i ++){
  if (movies[i].genre.includes(genre)){ // if the loop has a matching genre
    genrearr.push(movies[i]) // push it into our new array
    }
    
 }
 
 
return (genrearr);
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
// loop through movies 
// check if released year is equal to or less than year param
// released year is a string. we only want the value of the last number (length minus 4 to get last 4 values ??)
// if yes, return in array


function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
let yearMovie = []
let stringYear = (movies.releasedOnDVD.length - 4)
  for (let i = 0; i < movies.length; i++){
     if (stringYear < year){
      yearMovie.push(movies[i].title)
     }

  } return yearMovie;
} 

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
