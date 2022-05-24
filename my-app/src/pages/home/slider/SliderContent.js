import React from 'react'

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slide active' : 'inactive'}
        >
            <img className='slide-image' src={slide.urls} alt={slide.title} />
        </div>
      ))}
    </>
  )
}

export default SliderContent
