import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Signup } from './Component/Signup'
import { Login } from './Component/Login'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  )
}

export default App
