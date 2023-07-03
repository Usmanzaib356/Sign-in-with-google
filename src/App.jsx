import React from 'react'
import './index.css'
import Signin from './Components/Signin'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  )
}

export default App