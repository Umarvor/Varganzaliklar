import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Slayder.css';
import F from '../img/images (1).jpg'
import G from '../img/photo_2019-09-29_17-07-31-680x453.jpg'
import H from '../img/f.jpg'
import A1 from '../img/1.jpg'
import A2 from '../img/4.jpg'
import A3 from '../img/5.jpg'
import { Navigation, Autoplay } from 'swiper/modules';

export default function Slayder() {
  return (
    <>
    <br />  
    <h1 className='Slayder-h1'>Yangiliklar</h1>
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
          <img className='SwiperSlide-image' src={F} alt='First Slide' />
          <p className='Slayder-article-text'>O'zbekistondagi ilk agroturizm qishlog'i e'lon qilindi. U Qashqadaryo viloyatida</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='Slayder-article'>
          <img className='SwiperSlide-image' src={G} alt='Second Slide' />
          <p className='Slayder-article-text'>Oldinroq Qashqadaryoning Kitob tumanidagi Varganza qishlog‘ida Birinchi xalqaro anor festivali ish boshlaganini ma’lum qilgan edik. 2020-yil 28-sentabr, shanba kuni festivalning asosiy tadbirlari Varganza qishlog‘ida bo‘lib o‘tdi.</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='Slayder-article'>
          <img className='SwiperSlide-image' src={H} alt='Third Slide' />
          <p className='Slayder-article-text'>Dastlab mehmonlar Kitobning diqqatga sazovor joylari, xususan, Hazrat Bashir ziyoratgohi bilan tanishdi.

</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='Slayder-article'>
          <img className='SwiperSlide-image' src={A1} alt='Third Slide' />
          <p className='Slayder-article-text'>Shundan so‘ng Toshkentdan tashrif buyurgan katta delegatsiya Varganzaga yo‘l oldi.</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='Slayder-article'>
          <img className='SwiperSlide-image' src={A2} alt='Third Slide' />
          <p className='Slayder-article-text'>Keyin Varganzada birinchi agroturistik qishloqning ochilish marosimi bo‘lib o‘tdi. Agroturistik qishloqning ramziy kaliti Varganza qishlog‘i raisiga topshirildi.

</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='Slayder-article'>
          <img className='SwiperSlide-image' src={A3} alt='Third Slide' />
          <p className='Slayder-article-text'>Tuman hokimi, tuman va viloyat darajasidagi amaldorlarning chiqishidan so‘ng konsert dasturi uyushtirildi. Shuningdek, mehmonlar uchun turli o‘yinlar tashkil etildi. </p>
        </article>
      </SwiperSlide>

    
    </Swiper>
    </>
  );
}
