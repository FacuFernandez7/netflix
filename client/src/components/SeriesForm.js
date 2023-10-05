import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Modal.css'

const initialForm = {
  title: "",
  synopsis: "",
  score: "",
  genre: "",
  seasons: "",
  age: "",
}

export const SeriesForm = ({createData,updateData,dataToEdit,handleClose}) => {

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
      <form  onSubmit={(e) => onSubmitHandler(e)}>
        <div>
          <input type="text" name="title" className="input-form" value={form.title} onChange={onChangeHandler} placeholder="Title"></input> <br/>
          <input type="text" name="synopsis" className="input-form" value={form.synopsis} onChange={onChangeHandler} placeholder="Synopsis"></input> <br/>
          <input type="number" name="score" className="input-form" value={form.score} onChange={onChangeHandler} placeholder="Score"></input> <br/>
          <input type="text" name="genre" className="input-form" value={form.genre} onChange={onChangeHandler} placeholder="Genre"></input> <br/>
          <input type="number" name="seasons" className="input-form" value={form.seasons} onChange={onChangeHandler} placeholder="Seasons"></input> <br/>
          <input type="number" name="age" className="input-form" value={form.age} onChange={onChangeHandler} placeholder="Age"></input> <br/>
        </div>
        <section>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </section>
      </form>
    </>
  );
}