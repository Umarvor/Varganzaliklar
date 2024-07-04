import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from '../img/burger-menu.png'
import { useState,useRef } from 'react';
import axios from 'axios';
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
                    <NavLink to='/'><h1 className='Navbar111'>Varganzaliklar</h1></NavLink>
                    <ul className='Navbar11'>
                        <NavLink to='/'><li>Bosh sahifa</li></NavLink>
                        <Link to='/Tarix'><li>Tarix</li></Link>
                        <Link to='/Diqqatga_sazovor_joylar'><li >Diqqatga sazovor joylar</li></Link>
                        <Link to='/Faolyatlar'><li >Faoliyatlar</li></Link>
                        <Link to='/Mahalliy_bizneslar'><li>Mahalliy bizneslar</li></Link>
                        <Link to='/Galeriya'><li>Galereya</li></Link>
                        <Link to='Yangiliklar'><li>Yangiliklar</li></Link>
                        <Link to='Foydali_manbalar'><li>Foydali manbalar</li></Link>
                        <li onClick={handleToggleCommentBox}>Sharhlar qoldirish</li>
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