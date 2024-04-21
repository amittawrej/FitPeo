import React from 'react'
import MainDashboard from './components/MainDashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div>
    <Navbar/>
    <div>
      <MainDashboard/>
    </div>
   </div>
  )
}

export default App