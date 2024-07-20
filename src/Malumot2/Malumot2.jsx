import React from 'react'
import './Malumot2.css'
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import Scroll from '../Navbarroter/Scroll'

function Malumot() {
    return (
        <>
        <Scroll>
            <h1 className='Slayder-h1'>Varganza tadbirkorlik subeyktlari:</h1>

            <Link to='/Mahalliy_bizneslar'>
                <br />
                <div className='video-player-wrapper'>
                    <ReactPlayer className='video-player'
                        url='https://www.youtube.com/watch?v=dCe8ALPSi4g&pp=ygUU0LLQsNGA0LPQsNC90LfQsCBzdXY%3D' // Bu yerda YouTube video manzilini kiriting
                        width='100%'
                        height='500px'
                        controls={true}
                    />


                </div>
                <ReactPlayer className='video-player'
                    url='https://www.youtube.com/watch?v=J_275yVPXTM&pp=ygUaa2l0b2IgdHVtYW5pIHRhZGJpcmtvcmxhcmk%3D' // Bu yerda YouTube video manzilini kiriting
                    width='100%'
                    height='500px'
                    controls={true}
                />
                <br />

            </Link>
            <h3>Varganza qishlog'ida ko'plab mahalliy bizneslar faoliyat yuritadi. Ular orasida hunarmandchilik, dehqonchilik va kichik korxonalar mavjud. Mahalliy bizneslar qishloq iqtisodiyotini rivojlantirishda muhim rol o'ynaydi.

                Ekologik Muammolar v Varganza shaharchasida 50 dan ortiq tadbirkorlik subektlari mavjud.</h3>
            <br />
            </Scroll>
        </>
    )
}

export default Malumot