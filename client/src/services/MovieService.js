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
  
  console.log(result)
  return result;
}

export const updateMovie = async (data) => {
  const updateMovie = {
    title: data.title,
    synopsis: data.synopsis,
    score: data.score,
    genre: data.genre,
    age: data.age,
  }
  const result = await axios.put(`${baseURL}/${data.id}`, updateMovie).then(res => res);
  return result;
}

