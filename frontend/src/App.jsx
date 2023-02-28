import { useState } from 'react'
import './App.css'
import Features from './Components/Features'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Features/>}/>
      </Routes>
    </div>
  )
}

export default App
