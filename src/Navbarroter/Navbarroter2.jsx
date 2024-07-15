import React from 'react'
import './Navbarroter.css'
import Na4 from '../img/na4.jpg'
import Na5 from '../img/na5.jpg'
import Na6 from '../img/na6.jpg'
function Navbarroter2() {
    return (
        <div className='Navbarroter2'>
            <br /><br />
            <h2 className='Navbarroter1-h22'>Varganzadagi Birinchi xalqaro anor festivalidan fotoreportaj</h2>
            <p className='Navbarroter1-pp'>Oldinroq Qashqadaryoning Kitob tumanidagi Varganza qishlog‘ida Birinchi xalqaro anor festivali ish boshlaganini ma’lum qilgan edik. 2019-yil 28-sentabr, shanba kuni festivalning asosiy tadbirlari Varganza qishlog‘ida bo‘lib o‘tdi.</p>
            <img className='Navbarroter1-img2' src={Na4} alt="" />
            <img className='Navbarroter1-img2' src={Na5} alt="" />
            <img className='Navbarroter1-img2' src={Na6} alt="" />
            <p className='Navbarroter1-pp'>Tuman hokimi, tuman va viloyat darajasidagi amaldorlarning chiqishidan so‘ng konsert dasturi uyushtirildi. Shuningdek, mehmonlar uchun turli o‘yinlar tashkil etildi. Jumladan, mehmonlarga anorzorga kirib, eng katta anorni topib, uzib kelish topshirildi. Uzilgan anorlar orasidan qishloq oqsoqollari eng kattasini saralab oldi. Mazkur anor kimoshdi savdosiga qo‘yildi. Savdodan tushgan 50 dollar pul Varganzada 28-sentabrda tug‘iladigan birinchi bolaga sovg‘a qilinadigan bo‘ldi. </p>
        </div>
    )
}

export default Navbarroter2