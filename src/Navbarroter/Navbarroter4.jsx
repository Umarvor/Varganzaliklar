// src/Navbarroter/Navbarroter4.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbarroter.css';
import image1 from '../img/20.jpg';
import image2 from '../img/21.jpg';
import image3 from '../img/22.jpg';
import image4 from '../img/23.jpg';
import image5 from '../img/24.jpg';

const images = [image1, image2, image3, image4, image5];

function Navbar4() {
  return (
    <div className="image-container">
      {images.map((src, index) => (
        <ImageComponent key={index} src={src} index={index} />
      ))}
    </div>
  );
}

function ImageComponent({ src, index }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setInView(true);
      setTimeout(() => setInView(false), 2000); // Animatsiyani qayta boshlash
    }, 3000); // Har 2 soniyada animatsiyani qayta boshlash
    return () => clearInterval(interval);
  }, []);

  const positionClasses = ['left', 'center', 'right'];

  return (
    <motion.div
      className={`image-wrapper ${positionClasses[index % 3]}`}
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 2 }}
      transition={{ duration: 1 }}
    >
      <img src={src} alt="image" className="image" />
    </motion.div>
  );
}

export default Navbar4;
