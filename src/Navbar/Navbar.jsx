import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='Navbar'>

                <article className='Navbar1'>
                    <NavLink to='/'><h1 className='Navbar111'>Varganzaliklar</h1></NavLink>
                    <ul className='Navbar11'>
                        <NavLink to='/'><li>Bosh sahifa</li></NavLink>
                        <Link to='/Tarix'><li>Tarix</li></Link>
                        <Link to='/Diqqatga_sazovor_joylar'><li>Diqqatga sazovor joylar</li></Link>
                        <Link to='/Faolyatlar'><li>Faoliyatlar</li></Link>
                        <Link to='/Mahalliy_bizneslar'><li>Mahalliy bizneslar</li></Link>
                        <li>Galereya</li>
                        <li>Yangiliklar</li>
                        <li>Foydali manbalar</li>
                        <li>Sharhlar qoldirish</li>
                    </ul>
                </article>

            </div>
        </>

    )
}

export default Navbar