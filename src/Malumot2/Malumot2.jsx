import React from 'react';
import './Malumot2.css';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import Scroll from '../Navbarroter/Scroll';

function Malumot() {
    return (
        <>
            <Scroll>
                <h1 className='Header'>Varganza tadbirkorlik subeyktlari:</h1>
                <div className='ContentGrid'>
                    <Link to='/Mahalliy_bizneslar' className='VideoLink'>
                        <div className='VideoContainer'>
                            <ReactPlayer
                                className='VideoPlayer'
                                url='https://www.youtube.com/watch?v=dCe8ALPSi4g&pp=ygUU0LLQsNGA0LPQsNC90LfQsCBzdXY%3D' // Bu yerda YouTube video manzilini kiriting
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                        </div>
                    </Link>
                    <div className='Description'>
                        
                        <h3>
                            Varganza qishlog'ida ko'plab mahalliy bizneslar faoliyat yuritadi. Ular orasida hunarmandchilik, dehqonchilik va kichik korxonalar mavjud. Mahalliy bizneslar qishloq iqtisodiyotini rivojlantirishda muhim rol o'ynaydi. Ekologik Muammolar va Varganza shaharchasida 50 dan ortiq tadbirkorlik subektlari mavjud.
                        </h3>
                    </div>
                </div>
            </Scroll>
        </>
    );
}

export default Malumot;
