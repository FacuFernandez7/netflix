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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //if(form.id === null){
      createData(form)
    //}
    //else{
    //  updateData(form)
    //}
  }

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <h2>New Movie!</h2>
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <input type="text" name="title" onChange={onChangeHandler} placeholder="Title"></input> <br/>
            <input type="text" name="synopsis" onChange={onChangeHandler} placeholder="Synopsis"></input> <br/>
            <input type="number" name="score" onChange={onChangeHandler} placeholder="Score"></input> <br/>
            <input type="text" name="genre" onChange={onChangeHandler} placeholder="Genre"></input> <br/>
            <input type="number" name="age" onChange={onChangeHandler} placeholder="Age"></input> <br/>
            <input type="submit" value="Save"></input>
        </form>
    </div>
  )
}
