import React from 'react'
import { Movie } from './Movie';
import { Series } from './Series';

export const Home = () => {
  return (
    <>
      <div className='Header'>
        <h1>Movies and series unlimited!</h1>
        <h2>Enjoy where you want!</h2>
      </div>
      <Movie/>
      <Series/>
    </>
    
  )
}
