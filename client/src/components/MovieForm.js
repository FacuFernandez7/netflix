import React from 'react'

export const MovieForm = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>New Movie!</h1>
        <form>
            <input type="text" placeholder="Insert a tittle of movie"></input> <br/>
            <input type="text" placeholder="Insert a synopsis of movie"></input> <br/>
            <input type="number" placeholder="Insert a score of movie"></input> <br/>
            <input type="text" placeholder="Insert a genre of movie"></input> <br/>
            <input type="number" placeholder="Insert a age of movie"></input> <br/>
            <button type="submit" onSubmit={(e) => onSubmitHandler(e)}>Save</button>
        </form>
    </div>
  )
}
