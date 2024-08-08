import React, { useState } from 'react';

const Carousel = ({ slides }) => { // Accept slides as a prop
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel" style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: index === currentIndex ? 'block' : 'none' }}>
          <img src={slide} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      ))}
      <div className="arrow arrow-left" onClick={handlePrevious} style={{ color: '#FC780B', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', backgroundColor: '', borderRadius: '50%', textAlign: 'center', lineHeight: '40px', fontSize: '40px', cursor: 'pointer', opacity: 1, left: '10px' }}>&#8249;</div>
      <div className="arrow arrow-right" onClick={handleNext} style={{ color: '#FC780B', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', backgroundColor: '', borderRadius: '50%', textAlign: 'center', lineHeight: '40px', fontSize: '40px', cursor: 'pointer', opacity: 1, right: '10px' }}>&#8250;</div>
    </div>
  );
};

export default Carousel;
