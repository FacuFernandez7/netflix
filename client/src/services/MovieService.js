import axios from "axios";

const baseURL = "http://localhost:5000/movie/";

export const getMovies = async () => {
  let movies = {};
  movies = await axios.get(baseURL).then((response) => response.data);
  return movies;
};

export const newMovie = async (data) => {
  let newMovie = {
    title: data.title,
    synopsis: data.synopsis,
    score: data.score,
    genre: data.genre,
    age: data.age,
  }
  axios.post(baseURL, newMovie)
}

