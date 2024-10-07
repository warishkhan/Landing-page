import { useState } from "react";
import "./Swipper.css";
import PropTypes from "prop-types";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Money from '../../assets/money.png'
import messages from '../../assets/messages.png'
import send from '../../assets/send.png'

const Swipper = ({ slides }) => {
  // State for the current active slide
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className="carousel-containers">
      {/* Carousel slide track */}
      <div className="swipper-container">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`, // Shift based on active slide
            transition: "transform 0.5s ease-in-out", // Smooth transition
          }}
        >
          {slides.map((slide) => (
            <div className="slides" key={slide.id}>
              <div className="carousel-text">
                <div className="c-inner-divs">
                  <h3>{slide.content}</h3>
                  <p>{slide.contentText}</p>
                  <button>Read more</button>
                </div>
              </div>
              <div className="img-creator-bio">
                <img src={slide.images} alt={`Slide ${slide.id}`} />
                <div className="creator-bio">
                  <h3>{slide.username}</h3>
                  <div className="border-bottom"></div>
                  <p>{slide.professions}</p>
                  <div className="insta-icon-container">
                    <BiLogoInstagramAlt size={25} />
                    <p>{slide.followers}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="svg-container">
                    <div
                     onClick={() => goToSlide(0)}
                      className={`svg-icons ${
                        currentSlide == 0 ? "active" : ""
                      }`}
                    >
                      <img src={Money} alt="money"/>
                    </div>
                    <div
                     onClick={() => goToSlide(1)}
                      className={`svg-icons ${
                        currentSlide == 1 ? "active" : ""
                      }`}
                    >
                       <img src={messages} alt="messages"/>
                    </div>
                    <div
                     onClick={() => goToSlide(2)}
                      className={`svg-icons ${
                        currentSlide == 2 ? "active" : ""
                      }`}
                    >
                       <img src={send} alt="send"/>
                    </div>
                  </div>
      </div>
      <div className="carousel-btn-indicator-containers">
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
Swipper.propTypes = {
  slides: PropTypes.array.isRequired,
  second: PropTypes.bool.isRequired,
};

export default Swipper;
