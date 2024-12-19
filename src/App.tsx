import { useState } from 'react'
import './App.css'
import Login from './custom-components/Login/Login.tsx'
import Navbar from './custom-components/Navbar/Navbar.tsx'

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}

export default App
