import Cards from "../cards/Cards";
import "./CardsSection7.css";
import data from '../../assets/data.json'
import { motion } from 'framer-motion';

const CardsSection7 = () => {
  const {swipper} = data;

  return (
    <div className="cardsSection-main-container">
      <motion.div 
      className="cardsSection-text"
      initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h3>Are you one of them?</h3>
        <p>
          We work with Creators big and small, up and comers, trendsetters and
          market leaders. We look for creators with interesting stories and
          exceptional content across categories.
        </p>
      </motion.div>
      <div className="horizontal-scroll">
        {swipper.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection7;
