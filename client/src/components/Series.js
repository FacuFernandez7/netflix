import React, {useState, useEffect} from 'react'
import { getSeries, newSeries, updateSeries, deleteSeries } from '../services/SeriesServices'
import { SeriesForm } from './SeriesForm'
import '../styles/App.css'
import {alertMessage, confirmMessage} from './Message'
import {Popup} from './Popup'

export const Series = () => {

  const [series, setSeries] = useState([])
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
    async function getAllSeries() {
      const AllSeries = await getSeries()
      setSeries(AllSeries)
    }
    getAllSeries()
  }, [])


  const createData = async (data) => {
    try{
      const result = await newSeries(data)
      setSeries([...series, result.data])
      alertMessage("Success", "The series was successfully added", "success")
    }
    catch (e){
      alertMessage("Error", "Oops something went wrong", "error")
    }
  }

  const updateData = async (data) => {
    try {
      const res = await updateSeries(data)
      const newData = series.map(el => el.id === res.id ? res : el)
      setSeries(newData)
      alertMessage("Success", "The series was successfully updated", "success")
    } catch (error) {
      alertMessage("Error", "Oops something went wrong", "error")
    }
  }

  const dialogConfirm = (id) => {
      confirmMessage("Confirm",
        "Are you sure you want to delete this series?",
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
      await deleteSeries(id)
      const newData = series.filter(el => el.id !== id)
      setSeries(newData)
      alertMessage("Success", "The series was successfully deleted", "success")
    } catch (error) {
      alertMessage("Error", "Oops something went wrong", "error")
    }
  }

  return (
    <>
      <div className='App-header'>
        <h1>Series</h1>
        
      </div>
      <button onClick={() => handleShow({})}>+</button>
      <section className='flex-container'>
      {
        series.map((el,index) => {
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
        <SeriesForm createData={createData} 
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  handleClose={handleClose}
                />
      </Popup>
    </>
  )
}
