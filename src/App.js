import React from 'react'

import './scss/reset.scss'
import './scss/index.scss'

import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Menu from './components/Menu.js'
import Contact from './components/Contact'
 
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />     {/* Use more accent color */}
      <Menu />
      <Contact />
    </>
  )
}

export default App