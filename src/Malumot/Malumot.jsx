import React from 'react';
import './Malumot.css';
import Scroll from '../Navbarroter/Scroll';
import ReactPlayer from 'react-player/youtube';
import { NavLink } from 'react-router-dom';

function Malumot() {
    return (
        <>
            <Scroll>
                <h1 className='Slayder-h1'>Varganza tarixi:</h1>
                <br />
                <div className='grid-container'>
                    <article className='Malumot-article'>
                        <br />
                        <p><h1>Varganza</h1> — Oʻzbekiston Respublikasi Qashqadaryo viloyati Kitob tumaniga qarashli shaharcha. 2009-yil 13-martda Vazirlar Mahkamasining qaroriga binoan shaharcha maqomi berilgan.</p>
                        <br />
                        <p><h1>Etimologiyasi</h1>  <br /> —

                            Roʻdakiy asarlarida vargʻ soʻzi toʻgʻon, band maʼnosida qoʻllaniladi. X-XIX asrlarga mansub tojik qoʻlyozma manbalarida vargʻ soʻzi band, toʻsib toʻplangan suv havzasi maʼnosida ishlatilgan. Yangi soʻgʻd tili boʻlmish yagʻnob tilida esa vargʻ dalaning yuqori tomoni degan maʼnoni bildirgan. Asl soʻgʻdiychada esa vargʻ bu suv toʻplanadigan joy, band, toʻgʻon deganidir. oʻsha davrlarda -on qoʻshimchasi oʻrin-joy otini yasovchi qoʻshimcha sifatida qoʻllanilgan. Hudud nomi dastavval vodiy, soylik nomi sifatida qollanilgan. V-X asrlarda u qayta shakllanib Vargʻonzoy — Vargʻanzoy — Varganzay — Varganza degan shaklga kelib qolgan. Shaharcha nomidagi soʻz asli suv bandi yonidagi joy, toʻgʻonga yaqin hudud maʼnosini bildirgan</p>
                        <br />
                    </article>
                    <NavLink to='/Tarix' className='video-player-wrapper'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=fNYafBh4mLQ&pp=ygUQdmFyZ2FuemEgdGEncml4aQ%3D%3D' // Bu yerda YouTube video manzilini kiriting
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </NavLink>
                    <br /><br />
                </div>
            </Scroll>
        </>
    )
}

export default Malumot;
