import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'

function App() {
 

  return (
    <>
    <Homepage/>
      <Navbar/>
    </>
  )
}

export default App
