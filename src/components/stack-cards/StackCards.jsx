import { useEffect, useRef } from "react";
import "./StackCards.css";
import { motion } from "framer-motion";

const StackCards = () => {
  const cardsRef = useRef([]);

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
          // Move up the first and second cards with rotation
          card.style.transform = `translate(-50%, -50%) translateY(-300%) rotate(-45deg)`;
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
              <div className="sub">Card 1</div>
              <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6668ff84b92fd2c64cae74c1_Frame%201116601110%20(2).png" loading="lazy" alt className="transparent-circle"/>
              <div className="content">Content for card 1</div>
            </motion.div>
            <motion.div
              className="stack-card"
              ref={(el) => (cardsRef.current[1] = el)}
              initial={{ opacity: 1 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sub">Card 2</div>
              <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6668ff84b92fd2c64cae74c1_Frame%201116601110%20(2).png" loading="lazy" alt className="transparent-circle"/>
              <div className="content">Content for card 2</div>
            </motion.div>
            <div className="stack-card">
              <div className="sub">Card 3</div>
              <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6668ff84b92fd2c64cae74c1_Frame%201116601110%20(2).png" loading="lazy" alt className="transparent-circle"/>
              <div className="content">Content for card 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCards;
