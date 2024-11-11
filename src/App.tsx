import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Signup } from './Component/Signup'
import { Login } from './Component/Login'
import { Map } from './Component/Map'
import SupplierMap from './Component/SupplierMap'
import NewLocation from './Component/NewLocation'

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={ <SupplierMap/>} /> */}
      <Route path="/" element={<SupplierMap/>} />
      <Route path="/login" element={<Signup />} />
    </Routes>
  )
}

export default App
