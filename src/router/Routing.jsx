import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
const Routing = () => {
  const styling = {color:'#fff'}
  return (
    <>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<About/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='*' element={<h1 style={styling}>404 Page not Found</h1>} />
        </Routes>
    </>
  )
}

export default Routing
