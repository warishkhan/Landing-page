import { useState, useEffect } from "react";
import "./Carousel.css";
import PropTypes from 'prop-types';


const Carousel = ({slides,second}) => {
  // State for the current active slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to control pause on hover

  // Data for the slides (you can replace this with your own images and texts)
  

  // Automatically slide every 3 seconds, unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [currentSlide, isPaused]);

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Jump to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle mouse enter to pause the carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Handle mouse leave to resume the carousel
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter} // Pause on hover
      onMouseLeave={handleMouseLeave} // Resume on mouse leave
    >
      {/* Carousel slide track */}
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, // Shift based on active slide
          transition: "transform 0.5s ease-in-out", // Smooth transition
        }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
          <img src={slide.image} alt={`Slide ${slide.id}`} />
          <div className="carousel-text">
            <div className="c-inner-div">
            {second && <p className="c-inner-number">{`0${slide.id}`}</p>}
            <h3>{slide.headingText}</h3>
            <p>{slide.text}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="carousel-btn-indicator-container">
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="carousel-btn-container">
          <button className="carousel-btn btn-left " onClick={prevSlide}>
            ←
          </button>
          <button className="carousel-btn " onClick={nextSlide}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};


// Define prop types for the component
Carousel.propTypes = { 
  slides: PropTypes.array.isRequired,
  second:PropTypes.bool.isRequired
};

export default Carousel;
