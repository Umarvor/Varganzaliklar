import React from 'react'
import { useState, useRef } from 'react';
import axios from 'axios';
import Ssms from '../img/notification.png'
function Sms() {
    const commentRef = useRef(null);
    const [showCommentBox, setShowCommentBox] = useState(false);
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
            <div id='kmn'>
                
                    <img className='Ssm' onClick={handleToggleCommentBox} src={Ssms} alt="" />
                

            </div>
            <div>
                {showCommentBox && (
                    <div className='comment-parent'>
                        <div className="comment-box">
                            <article className='vf'>
                                <h2>Izoh qoldirish:</h2>
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

export default Sms