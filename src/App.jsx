import React from 'react'
import Routing from './router/Routing'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>  
      <main>
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <Routing/>
        </div>
      </main>
    </>
  )
}

export default App
