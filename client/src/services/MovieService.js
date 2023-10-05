import axios from "axios";


const baseURL = "http://localhost:5000/movie/";

export const getMovies = async () => {
  let movies = {};
  movies = await axios.get(baseURL).then((res) => res.data);
  return movies;
};

export const newMovie = async ({title,synopsis,score, genre,age}) => {
  const newMovie = {
    title,
    synopsis,
    score,
    genre,
    age
  }
  const result = await axios.post(baseURL, newMovie).then(res => res);
  return result;
}

export const updateMovie = async ({id,title,synopsis,score, genre,age}) => {
  const updateMovie = {
    title,
    synopsis,
    score,
    genre,
    age,
  }
  const result = await axios.put(`${baseURL}/${id}`, updateMovie).then(res => res.data);
  return result;
}

export const deleteMovie = async (id) => {
  const result = await axios.delete(`${baseURL}/${id}`).then(res => res.status);
  return result;
}

