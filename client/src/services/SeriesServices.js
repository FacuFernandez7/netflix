import axios from "axios";


const baseURL = "http://localhost:5000/series/";

export const getSeries = async () => {
  let movies = {};
  movies = await axios.get(baseURL).then((res) => res.data);
  return movies;
};

export const newSeries = async ({title,synopsis,score,seasons,genre,age}) => {
  const newSeries = {
    title,
    synopsis,
    score,
    genre,
    seasons,
    age
  }
  const result = await axios.post(baseURL, newSeries).then(res => res);
  return result;
}

export const updateSeries = async ({id,title,synopsis,score,seasons,genre,age}) => {
  const updateSeries = {
    title: title,
    synopsis: synopsis,
    score: score,
    genre: genre,
    seasons: seasons,
    age: age,
  }
  const result = await axios.put(`${baseURL}/${id}`, updateSeries).then(res => res.data);
  return result;
}

export const deleteSeries = async (id) => {
  const result = await axios.delete(`${baseURL}/${id}`).then(res => res.status);
  return result;
}

