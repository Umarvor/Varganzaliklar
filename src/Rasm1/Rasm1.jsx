import React from 'react'
import Scroll from '../Navbarroter/Scroll2'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NAA6 from '../img/na6.jpg'
import Na22 from '../img/na2.jpg'
import Na33 from '../img/1.jpg'
const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Scroll>
    <div className="App">
      <Slider {...settings}>
        <div>
          <img src={NAA6} alt="Image 1" />
        </div>
        <div>
          <img src={Na22} alt="Image 2" />
        </div>
        <div>
          <img src={Na33} alt="Image 3" />
        </div>
      </Slider>
    </div>
    </Scroll>
  );
};

export default App;
