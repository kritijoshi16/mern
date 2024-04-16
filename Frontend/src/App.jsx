import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import EventHandling from './components/EventHandling'
import{SnackbarProvider} from 'notistack'
import ManageUsers from './components/ManageUsers'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <div>
      <SnackbarProvider/>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/EventHandling' element={<EventHandling />}/>
        <Route path='/ManageUsers' element={<ManageUsers />}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
        


    

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App