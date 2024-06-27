import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Slayder2.css';
import A13 from '../img/13.jpg'
import A11 from '../img/11.jpg'
import A12 from '../img/12.jpg'
import A15 from '../img/15.jpg'
import { Navigation, Autoplay } from 'swiper/modules';

export default function Slayder() {
    return (
        <>
            <br />
            <h1 className='Slayder-h1'>Bizning Faxriylar:</h1>
            <br />
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1000, // 1 second
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                }}
                modules={[Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A13} alt='First Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi</p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A11} alt='Second Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi.</p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A12} alt='Third Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi.

                        </p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A13} alt='Third Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi.</p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A11} alt='Third Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi.

                        </p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='Slayder-article'>
                        <img className='SwiperSlide-image' src={A15} alt='Third Slide' />
                        <p className='Slayder-article-text'>Shavkat Mirziyoyev urush faxriylarini ziyorat qildi.</p>
                    </article>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
