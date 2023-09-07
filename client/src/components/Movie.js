import React, {useState, useEffect} from 'react'
import { getMovies, newMovie } from '../services/MovieService'
import { MovieForm } from './MovieForm'
import '../styles/App.css'

export const Movie = () => {

  const [movies, setMovies] = useState([])
  const [dataToEdit, setDataToEdit ] = useState(null);

  const createData = (data) => {
    newMovie(data)
  }

  const updateData = (data) => {}

  const deleteData = (data) => {}
  
  useEffect(() => {
    async function getAllMovies() {
      const Allmovies = await getMovies()
      setMovies(Allmovies)
    }
    getAllMovies()
  }, [])

  return (
    <>
      <h1 className='App-header'>Movies</h1>
      <section className='flex-container'>
      {
        movies.map((el,index) => {
          return (
            <div className='card' key={index}>{el.title}</div>
          )
        }) 
      }
      </section>
        <MovieForm
          createData={createData} 
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
    </>
  )
}