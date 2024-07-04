import React, { useState } from 'react';
import './Navbarroter.css';

const sections = [
  {
    title: "Qishloq Tarixi",
    content: "Varganza qishlog'i qadimiy tarixga ega bo'lib, uning paydo bo'lishi miloddan avvalgi davrlarga borib taqaladi. Qishloqning asoschilari va dastlabki aholisi haqida ko'plab qiziqarli rivoyatlar mavjud. Eski hujjatlar va suratlar Varganza qishlog'ining boy tarixiy merosini saqlab kelmoqda."
  },
  {
    title: "Madaniyat va Urf-Odatlar",
    content: "Varganza qishlog'i o'zining o'ziga xos madaniyati va an'anaviy bayramlari bilan ajralib turadi. Har yili qishloq aholisi Navro'z bayramini katta tantana bilan nishonlaydi. To'y marosimlari, xalq o'yinlari va an'anaviy kiyim-kechaklar qishloqning madaniy boyliklaridan hisoblanadi."
  },
  {
    title: "Tabiiy Boyliklar va Qishloq Xo'jaligi",
    content: "Varganza qishlog'i tabiiy resurslarga boy bo'lib, u yerda qishloq xo'jaligi rivojlangan. Qishloqda bug'doy, paxta, sabzavot va mevalar yetishtiriladi. Zamonaviy qishloq xo'jaligi texnologiyalari va ekologik toza mahsulotlar Varganza qishlog'ining qishloq xo'jaligida qo'llaniladi."
  },
  {
    title: "Diqqatga Sazovor Joylar",
    content: "Varganza qishlog'ida ko'plab diqqatga sazovor joylar mavjud. Qishloqdagi eski masjid va maqbara, tarixiy obidalar va tabiat parklar sayyohlarni jalb etadi. Ushbu joylarda qishloqning boy tarixi va madaniyatini o'rganish mumkin."
  },
  {
    title: "Mashhur Insonlar",
    content: "Varganza qishlog'idan ko'plab mashhur insonlar chiqqan. Ularning orasida taniqli yozuvchilar, san'atkorlar va olimlar bor. Bu insonlarning hayoti va faoliyati haqida ma'lumotlar qishloqning faxri hisoblanadi."
  },
  {
    title: "Mahalliy Taomlar va Oshxona",
    content: "Varganza qishlog'ining an'anaviy taomlari o'zining ajoyib ta'mi va tayyorlash usullari bilan ajralib turadi. Osh, manti, somsa kabi taomlar mahalliy oshxonaning o'ziga xosligi hisoblanadi. Bu taomlarning retseptlari va tayyorlash usullari haqida ma'lumotlar bilan bo'lishamiz."
  },
  {
    title: "Qishloq Turizmi",
    content: "Varganza qishlog'ida turizm rivojlanmoqda. Mehmonxona va dam olish maskanlari sayyohlar uchun barcha qulayliklarni taqdim etadi. Qishloqdagi turistik yo'nalishlar va faoliyatlar sayyohlar uchun qiziqarli tajriba bo'ladi."
  },
  {
    title: "Mahalliy Bizneslar va Tadbirkorlik",
    content: "Varganza qishlog'ida ko'plab mahalliy bizneslar faoliyat yuritadi. Ular orasida hunarmandchilik, dehqonchilik va kichik korxonalar mavjud. Mahalliy bizneslar qishloq iqtisodiyotini rivojlantirishda muhim rol o'ynaydi."
  },
  {
    title: "Ekologik Muammolar va Ularni Hal Etish",
    content: "Varganza qishlog'ida mavjud ekologik muammolar haqida ham ma'lumot beramiz. Qishloqning ekologik holatini yaxshilash va muammolarni hal etish bo'yicha amalga oshirilayotgan loyihalar va tadbirlar haqida ham yozamiz."
  },
  {
    title: "Foydali Resurslar",
    content: "Varganza qishlog'i haqida qo'shimcha ma'lumotlar olish uchun quyidagi resurslardan foydalanishingiz mumkin:\n- Mahalliy hukumat veb-saytlari\n- Tarixiy hujjatlar va ilmiy maqolalar\n- Mahalliy muzeylar va kutubxonalar"
  }
];

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      <h3>{title}</h3>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-content"><p>{content}</p></div>}
  </div>
);

const VarganzaInfo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default VarganzaInfo;
