import React, {useState, useEffect} from 'react'
import { getMovies, newMovie, updateMovie, deleteMovie } from '../services/MovieService'
import { MovieForm } from './MovieForm'
import '../styles/App.css'
import {alertMessage, confirmMessage} from './Message'
import {Popup} from './Popup'

export const Movie = () => {

  const [movies, setMovies] = useState([])
  const [dataToEdit, setDataToEdit ] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setDataToEdit({})
  }

  const handleShow = (el) => {
    setDataToEdit(el)
    setShow(true);
  }

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
      alertMessage("Error", "Oops something went wrong", "error")
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
          }
        }
      )
  }

  const deleteData = async (id) => {
    try {
      await deleteMovie(id)
      const newData = movies.filter(el => el.id !== id)
      setMovies(newData)
      alertMessage("Success", "The movie was successfully deleted", "success")
    } catch (error) {
      alertMessage("Error", "Oops something went wrong", "error")
    }
  }

  return (
    <>
      <div className='App-header'>
        <h1>Movies</h1>
        
      </div>
      <button onClick={() => handleShow({})}>+</button>
      <section className='flex-container'>
      {
        movies.map((el,index) => {
          return (
            <div className='card' key={index}>{String(el.title).length > 12 ? String(el.title).slice(0, 15) + "..." : el.title}
              <button className='edit-button' onClick={() => {handleShow(el)}}>Edit</button>
              <button className='delete-button' onClick={() => dialogConfirm(el.id)}>Delete</button>
            </div>
          )
        }) 
      }
      </section>
      <Popup 
        show={show}
        handleClose={handleClose}
      >
        <MovieForm createData={createData} 
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  handleClose={handleClose}
                />
      </Popup>
    </>
  )
}
