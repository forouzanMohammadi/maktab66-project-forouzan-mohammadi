import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import imageSlider from './imageSlider';
import Arrows from './Arrows';
import Dots from './Dots';

const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    },9000)
    return () => clearInterval(interval);
  },[activeIndex]);

  return (
    <>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          imageSlider={imageSlider}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  )
};

export default Slider;
