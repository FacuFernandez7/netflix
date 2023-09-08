import React, {useState, useEffect} from 'react'
import { getMovies, newMovie, updateMovie } from '../services/MovieService'
import { MovieForm } from './MovieForm'
import '../styles/App.css'
import Message from './Message'

export const Movie = () => {

  const [movies, setMovies] = useState([])
  const [dataToEdit, setDataToEdit ] = useState({});

  useEffect(() => {
    async function getAllMovies() {
      const Allmovies = await getMovies()
      setMovies(Allmovies)
    }
    getAllMovies()
  }, [])


  const createData = async (data) => {
    try{
      const result = await newMovie(data)
      setMovies([...movies, result.data])
    }
    catch (e){
     
    }
  }

  const updateData = async (data) => {
    try {
      const newData = movies.map(el => el.id === data.id ? data : el)
      setMovies(newData)
    } catch (error) {
      
    }
  }

  const deleteData = (data) => {}

  return (
    <>
      <h1 className='App-header'>Movies</h1>
      <section className='flex-container'>
      {
        movies.map((el,index) => {
          return (
            <div className='card' key={index}>{String(el.title).length > 12 ? String(el.title).slice(0, 15) + "..." : el.title}
              <button className='edit-button' onClick={() => setDataToEdit(el)}>Edit</button>
              <button className='delete-button'>Delete</button>
            </div>
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