import React from 'react'
import Scroll from '../Navbarroter/Scroll'
import './Navbarroter.css'
import Na1 from '../img/na1.jpg'
import Na2 from '../img/na2.jpg'
import Na3 from '../img/na3.jpg'
function Navbarroter1() {
    return (
        <Scroll>
        <div>
            <h1 className='nm'>Diqqatga Sazovor Joylar </h1>
           <br />
           <h2 className='iu'>Varganza qishlog'ida ko'plab diqqatga sazovor joylar mavjud. Qishloqdagi eski masjid va maqbara, tarixiy obidalar va tabiat parklar sayyohlarni jalb etadi. Ushbu joylarda qishloqning boy tarixi va madaniyatini o'rganish mumkin.</h2>
            <br />
            <h2 className='Navbarroter1-h2'>Hazrati Bashir ziyoratgohi: </h2>
            <br />
            <div className='Navbarroter1'>
                <article>
                    <img className='Navbarroter1-img' src={Na1} alt="" />
                </article>
                <article className='Navbarroter1-text'><h2>Hudud:Qashqadaryo viloyati;</h2>
                    <h2 >Kategoriya:Ziyoratgoh, Diniy obyekt;</h2>
                    <a id='a' href="https://meros.uz/object/map/hazrati-bashir-ziyoratgohi"><h3>Xaritadan o'rni.</h3></a>
                </article>
            </div>
            <div>
                <h2 className='Navbarroter1-h2'>Xazrati Bashir tarixi:</h2>
                <p className='Navbarroter1-p'>Hazrati Sulton Said Axmad Bashir (1368 – 1464). «Xazrati Bashir tarixi» kitobida Amir Temur Ko‘rogoniyning piri Said Barakaning ukalari Said Ne’matulloxning karomatlari, duolari tufayli olamga keladi, deyiladi. Hazrati Bashirning otalari Xo‘ja Xasan 90 yoshda, onalari Bibi Maloxat 80 yoshda bo‘lishlariga qaramay, farzandlari bo‘lmagan, deb ko‘rsatiladi. Bola tug‘ilgach ota – onasi unga Said Axmad deb nom qo‘yishadi. Onalari Bibi Malokatdan sut kelmagach, yosh Said Axmad sutsiz voyaga yetadi. Said Axmaddan keyin onalari yana Said Ali va Xoji Axmad ismli ikki nafar farzand ko‘radi.

                </p>
                <img className='Navbarroter1-img2' src={Na2} alt="" />
            </div>
            <div>
                <h2 className='Navbarroter1-h2'>Masjidimiz:</h2>
                <p className='Navbarroter1-p'>Varganza shaharchasida 2 ta masjid joylashgan biri (1700-yilda) qurilgan va yana biri (2019-yilda) qurishni boshlab (2024-yilda) qurib bitkazildi.</p>
                <img className='Navbarroter1-img2' src={Na3} alt="" />
            </div>
        </div>
        </Scroll>
    )
}

export default Navbarroter1