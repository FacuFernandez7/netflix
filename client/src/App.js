import { React } from 'react';
import { NavbarLayout } from './layouts/Navbar';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import { Home } from './components/Home';
import { Movie } from './components/Movie';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarLayout/>  
        <Routes>
        <Route path="/" element={ <NavbarLayout/> }/>
          <Route index element={<Home/>}/>    
          <Route path='movies' element={<Movie/>}/> 
          <Route path='*' element={<Navigate replace to="/"/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
