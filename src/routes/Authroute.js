import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/homepage';

function Authroute() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        </Routes>   
        
    </>
  )
}

export default Authroute;