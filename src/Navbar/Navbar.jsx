import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from '../img/burger-menu.png'
import { useState,useRef } from 'react';
import axios from 'axios';
import VC from '../img/Снимок_экрана_2024-07-15_113525-removebg-preview.png'
function Navbar() {
    const [showCommentBox, setShowCommentBox] = useState(false);
  const commentRef = useRef(null);

  const handleToggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleSendComment = async () => {
    const comment = commentRef.current.value;
    if (comment) {
      try {
        const token = '7359191371:AAFBd5TKWb6LzOjIVY6s9BGd1OhcvABzVXY';  // O'zingizning Telegram bot tokeningizni qo'ying
        const chatId = '5643811856';  // O'zingizning chat ID ni qo'ying
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        await axios.post(url, {
          chat_id: chatId,
          text: comment
        });

        alert('Izoh yuborildi!');
        commentRef.current.value = '';
        setShowCommentBox(false);
      } catch (error) {
        console.error('Izoh yuborishda xato:', error);
        alert('Izoh yuborishda xato yuz berdi.');
      }
    } else {
      alert('Iltimos, izoh kiriting.');
    }
  };

 
    return (
        <>
            <div className='Navbar'>

                <article className='Navbar1'>
                    <ul className='Navbar11'>
                        <NavLink to='/'><li className='none'>Bosh sahifa</li></NavLink>
                        <Link to='/Tarix'><li className='none' >Tarix</li></Link>
                        <Link to='/Diqqatga_sazovor_joylar'><li className='none'>Diqqatga sazovor joylar</li></Link>
                        <Link to='/Faolyatlar'><li className='none' id='fa' >Faoliyatlar</li></Link>
                        <NavLink to='/'><img className='Navbar111' id='kk' src={VC} alt='' /></NavLink>
             
                        <Link to='/Mahalliy_bizneslar'><li className='none'>Mahalliy bizneslar</li></Link>

                        <Link to='/Galeriya'><li className='none'>Galereya</li></Link>
                        <Link to='Yangiliklar'><li className='none'>Yangiliklar</li></Link>
                        <Link to='Foydali_manbalar'><li className='none'>Foydali manbalar</li></Link>
                        
                        <li onClick={handleToggleCommentBox} className='none'>Sharhlar qoldirish</li>
                    </ul>
                    <img className='Navbar2' src={Menu} alt="" />
                </article>
                {showCommentBox && (
                    <div className='comment-parent'>
                        <div className="comment-box">
                            <article className='vf'>
                                <h2>Izoh qoldirish</h2>
                                <h1 onClick={handleToggleCommentBox} className='cx'>x</h1>
                            </article>
                            <textarea ref={commentRef} className='area' placeholder="Izohingizni kiriting"></textarea>
                            <button onClick={handleSendComment} className='btn'>Yuborish</button>
                        </div>
                    </div>
                )}

            </div>

        </>

    )
}

export default Navbar