import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Modal.css'

const initialForm = {
  title: "",
  synopsis: "",
  score: "",
  genre: "",
  age: "",
}

export const MovieForm = ({createData,updateData,dataToEdit,show,handleClose}) => {

  useEffect(() => {
    setForm(dataToEdit)
  }, [dataToEdit])

  
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(Object.keys(dataToEdit).length === 0){
      createData(form)
    }
    else{
      updateData(form)
      
    }
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-container'>
        <form  onSubmit={(e) => onSubmitHandler(e)}>
          <div >
            <input type="text" name="title" className="input-form" value={form.title} onChange={onChangeHandler} placeholder="Title"></input> <br/>
            <input type="text" name="synopsis" className="input-form" value={form.synopsis} onChange={onChangeHandler} placeholder="Synopsis"></input> <br/>
            <input type="number" name="score" className="input-form" value={form.score} onChange={onChangeHandler} placeholder="Score"></input> <br/>
            <input type="text" name="genre" className="input-form" value={form.genre} onChange={onChangeHandler} placeholder="Genre"></input> <br/>
            <input type="number" name="age" className="input-form" value={form.age} onChange={onChangeHandler} placeholder="Age"></input> <br/>
          </div>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}