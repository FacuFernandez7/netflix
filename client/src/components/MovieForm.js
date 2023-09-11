import React, {useState, useEffect} from 'react'

const initialForm = {
  title: "",
  synopsis: "",
  score: "",
  genre: "",
  age: "",
}

export const MovieForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setForm(dataToEdit)
  }, [dataToEdit])
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(Object.keys(dataToEdit).length === 0){
      createData(form)
    }
    else{
      updateData(form)
    }
    resetHandler()
  }

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const resetHandler = () => {
    setForm(initialForm)
  }

  return (
    <div>
      <h2>New Movie!</h2>
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <input type="text" name="title" value={form.title} onChange={onChangeHandler} placeholder="Title"></input> <br/>
            <input type="text" name="synopsis" value={form.synopsis} onChange={onChangeHandler} placeholder="Synopsis"></input> <br/>
            <input type="number" name="score" value={form.score} onChange={onChangeHandler} placeholder="Score"></input> <br/>
            <input type="text" name="genre" value={form.genre} onChange={onChangeHandler} placeholder="Genre"></input> <br/>
            <input type="number" name="age" value={form.age} onChange={onChangeHandler} placeholder="Age"></input> <br/>
            <input type="submit" value="Save"></input><input type="reset" value="Cancel" onClick={resetHandler}></input>
        </form>
    </div>
  )
}
