import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Results from './Results';

const Routess = () => {

  return (
    <div className="p-4">
      <Routes>
        <Route path='/search' element={<Results />} />
        <Route path='/image' element={<Results />} />
        <Route path='/videos' element={<Results />} />
        <Route path='/news' element={<Results />} />
      </Routes>
    </div>
  )
}

export default Routess
