import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from '../img/burger-menu.png'
import { useState, useRef } from 'react';

import VC from '../img/Снимок_экрана_2024-07-15_130625-removebg-preview.png'
function Navbar() {
 
  const [showCommentBoxx, setShowCommentBoxx] = useState(false);
 

 
  const handleToggleCommentBoxx = () => {
    setShowCommentBoxx(!showCommentBoxx);
  };
 

  return (
    <>
      <div className='Navbar'>

        <article className='Navbar1'>

          <NavLink to='/'><img  className='Navbar111' id='none' src={VC} alt='' /></NavLink>

          <ul className='Navbar11'>
            <NavLink to='/'><li className='none'>Bosh sahifa</li></NavLink>
            <Link to='/Tarix'><li className='none' >Tarix</li></Link>
            <Link to='/Diqqatga_sazovor_joylar'><li className='none'>Diqqatga sazovor joylar</li></Link>
            <Link to='/Faolyatlar'><li className='none' id='fa' >Faoliyatlar</li></Link>

            <Link to='/Mahalliy_bizneslar'><li className='none'>Mahalliy bizneslar</li></Link>

            <Link to='/Galeriya'><li className='none'>Galereya</li></Link>
            <Link to='Yangiliklar'><li className='none'>Yangiliklar</li></Link>
            <Link to='Foydali_manbalar'><li className='none'>Foydali manbalar</li></Link>

           
          </ul>
          <img onClick={handleToggleCommentBoxx} className='Navbar2' src={Menu} alt="" />
        </article>


      </div>
      <div className='popur'>

        {showCommentBoxx && (
          <div className='popup'>
            <article className='xxx'>
              <h1>Menyu</h1>
              <h1 onClick={handleToggleCommentBoxx} className='xx'>x</h1>

            </article>
            <article className=''>
              <NavLink to='/'><li className='sxa'>Bosh sahifa</li></NavLink>
              <Link to='/Tarix'><li className='sxa' >Tarix</li></Link>
              <Link to='/Diqqatga_sazovor_joylar'><li className='sxa'>Diqqatga sazovor joylar</li></Link>
              <Link to='/Faolyatlar'><li className='sxa' id='' >Faoliyatlar</li></Link>

              <Link to='/Mahalliy_bizneslar'><li className='sxa'>Mahalliy bizneslar</li></Link>

              <Link to='/Galeriya'><li className='sxa'>Galereya</li></Link>
              <Link to='Yangiliklar'><li className='sxa'>Yangiliklar</li></Link>
              <Link to='Foydali_manbalar'><li className='sxa'>Foydali manbalar</li></Link>

             
            </article>
          </div>
        )

        }

      </div>
    </>

  )
}

export default Navbar