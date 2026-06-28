import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-35'>
        <Home />
      </div>
    </div>
  )
}

export default App
