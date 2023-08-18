import axios from "axios";

const baseURL = "http://localhost:5000/movie/";

export const getMovies = async () => {
  let movies = {};
  movies = await axios.get(baseURL).then((response) => response.data);
  return movies;
};

