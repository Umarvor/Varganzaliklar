import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foter from '../footer.jsx/Foter'
import { Outlet } from 'react-router-dom'
function Navbardom() {
  return (
    <div>
      <header><Navbar /></header>
      <main><Outlet /></main>
     
      <footer><Foter /></footer>
    </div>
  )
}

export default Navbardom