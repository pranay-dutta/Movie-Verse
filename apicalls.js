import axios from "axios";
const API_KEY = "972f8b1f63fa2ce7567bbe60ea0d6cd5"
const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
const path = "https://image.tmdb.org/t/p/w300";

const fetchData = async () => {
  try {
    const response = await axios.get(URL);
    // console.log(response.data);
    // console.log(typeof response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
const Movies = await fetchData();
// console.log(Movies);
console.log(Array.isArray(Movies));
// console.log(typeof(Movies));
Movies.results.map(movie => {
  return console.log(movie.title);
});