import { useEffect, useRef, useState } from "react";
import "./StackCards.css";
import { motion } from "framer-motion";
import Card from "../card/Card";

const StackCards = () => {
  const cardsRef = useRef([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stackArea = document.querySelector(".stack-area");

    const handleScroll = () => {
      const proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;

      // Calculate the index based on scroll position
      const n = cardsRef.current.length;
      const index = Math.floor(Math.max((-proportion * n) / 2, 0));

      cardsRef.current.forEach((card, i) => {
        if (i < index) {
          if (isMobile) {
            // Move up the first and second cards with rotation
            card.style.transform = `translate(-50%, -50%) translateY(-300%) `;
          } else {
            // Move up the first and second cards with rotation
            card.style.transform = `translate(-50%, -50%) translateY(-300%) rotate(-45deg)`;
          }
        } else if (i === index) {
          // Position the last card without animation
          card.style.transform = `translate(-50%, -50%)`;
        } else {
          // Reset transform for other cards
          card.style.transform = `translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="center">
      <div className="stack-area">
        <div className="stack-right">
          <div className="stack-cards">
            <motion.div
              className="stack-card"
              ref={(el) => (cardsRef.current[0] = el)}
              initial={{ opacity: 1 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card />
            </motion.div>
            <motion.div
              className="stack-card"
              ref={(el) => (cardsRef.current[1] = el)}
              initial={{ opacity: 1 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card />
            </motion.div>
            <div className="stack-card">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCards;
