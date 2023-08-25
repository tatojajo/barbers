import { Route,Routes } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/barber/:firstname' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
