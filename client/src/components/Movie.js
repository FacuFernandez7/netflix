import React, {useState, useEffect} from 'react'
import { getMovies, newMovie, updateMovie, deleteMovie } from '../services/MovieService'
import { MovieForm } from './MovieForm'
import '../styles/App.css'
import {alertMessage, confirmMessage} from './Message'

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
      alertMessage("Success", "The movie was successfully added", "success")
    }
    catch (e){
     
    }
  }

  const updateData = async (data) => {
    try {
      const res = await updateMovie(data)
      const newData = movies.map(el => el.id === res.id ? res : el)
      setMovies(newData)
      alertMessage("Success", "The movie was successfully updated", "success")
    } catch (error) {
      alertMessage("Error", "Oops something went wrong", "error")
    }
  }

  const dialogConfirm = (id) => {
      confirmMessage("Confirm",
        "Are you sure you want to delete this movie?",
        "warning",
         async function (confirmed){
          if (confirmed){
            await deleteData(id)
            alertMessage("Success", "The movie was successfully deleted", "success")
          }
        }
      )
  }

  const deleteData = async id => {
    await deleteMovie(id)
    const newData = movies.filter(el => el.id !== id)
    setMovies(newData)
  }


  return (
    <>
      <h1 className='App-header'>Movies</h1>
      <section className='flex-container'>
      {
        movies.map((el,index) => {
          return (
            <div className='card' key={index}>{String(el.title).length > 12 ? String(el.title).slice(0, 15) + "..." : el.title}
              <button className='edit-button' onClick={() => setDataToEdit(el)}>Edit</button>
              <button className='delete-button' onClick={() => dialogConfirm(el.id)}>Delete</button>
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