import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <Navbar/>
    <MainRoutes/>
    <ToastContainer/>
    </>
  )
}

export default App