import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <div className='w-full'>
        <Navbar/>
    <Routes>

      
        {/* <Route path='/' element={<DashBoard/>}/> */}
        {/* <Route path='/home' element={<DashBoard/>}/> */}
        {/* <Route path='/expense' element={</>}/> */}
         {/* <Route path='/committee' element={</>}/> */}

    </Routes>
    </div>
  )
}

export default App
