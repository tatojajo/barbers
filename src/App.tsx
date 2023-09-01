import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import { BarberItem } from './@types/general'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
