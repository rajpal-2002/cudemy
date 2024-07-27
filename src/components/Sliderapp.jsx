import React, { useState, useEffect } from 'react';
import './Sliderapp.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [images, interval]);

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
};

const Sliderapp = () => {
  const images = [
    img1,img2,img3
  ];

  return (
    <div>
        <h1 className='text'>Learn from our best teachers</h1>
      <ImageSlider images={images} interval={2000} />
    </div>
  );
};

export default Sliderapp;
