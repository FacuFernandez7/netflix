import React, {useState, useEffect} from 'react'
import { getMovies } from '../services/MovieService'

export const Movie = () => {

  const [movies, setMovies] = useState([])
  //const service = getMovies();
  
  useEffect(() => {
    async function getAllMovies() {
      const Allmovies = await getMovies()
      setMovies(Allmovies)
      console.log("hola")
    }
    getAllMovies()
  }, [])

  return (
    <div>
      <h1>All Movies:</h1>
      {
        movies.map((el,index) => {
          return (
            <li key={index}>{el.title}</li>
          )
        }) 
      }
    </div>
  )
}

  //{movies.map((movie) => {
  //  return <li>{movie.title}</li>
  //})
  //}
