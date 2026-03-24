import { useState } from 'react'
import './App.css'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
}

export default App
