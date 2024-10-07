import { useState, useRef, useEffect } from "react";
import "./VerticalCarousel.css";

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const items = [
    {
      id: 0,
      headerText: "Sign up on Wishlink",
      text: "Complete the OTP process and create your Wishlink account",
    },
    {
      id: 1,
      headerText: "Link your social media",
      text: "Connect either your Instagram or YouTube account",
    },
    {
      id: 2,
      headerText: "Kickstart your earnings",
      text: "Create your first post, share the link with your audience",
    },
  ]; // Carousel items

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const itemHeight = carousel.clientHeight;
    const newIndex = Math.round(carousel.scrollTop / itemHeight);
    setActiveIndex(newIndex);
  };

  const handleIndicatorClick = (index) => {
    const carousel = carouselRef.current;
    const itemHeight = carousel.clientHeight;
    carousel.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Sync active indicator when scrolling with arrow keys or manually
  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="v-carousel-container">
        {/* Carousel */}
        <div className="v-carousel" ref={carouselRef}>
          {items.map((item, index) => (
            <div key={index} className="v-carousel-item">
              <p className="v-number">0{item.id + 1}</p>
              <h2>{item.headerText}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Indicators */}
      <div className="v-carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`v-indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default VerticalCarousel;
