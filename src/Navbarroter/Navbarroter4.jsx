import { useInView } from 'react-intersection-observer';
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
        <ImageComponent key={index} src={src} />
      ))}
    </div>
  );
}

function ImageComponent({ src }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      className="image-wrapper"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <img src={src} alt="image" className="image" />
    </motion.div>
  );
}

export default Navbar4;
