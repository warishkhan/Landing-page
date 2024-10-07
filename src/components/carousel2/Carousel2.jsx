import PropTypes from 'prop-types';
import './Carousel2.css';
import { motion } from 'framer-motion';
import Swipper from '../swipper/Swipper';

const Carousel2 = ({ text, slides }) => {
  return (
    <div className='carousel-body-containers'>
      <motion.div 
        className='c-header-container'
        initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2 className='carousel-header-text'>{text}</h2>
      </motion.div>
      <div className='carousel-main-containers'>
       <Swipper slides={slides}/>
      </div>
    </div>
  );
};

// Define prop types for the component
Carousel2.propTypes = {
  text: PropTypes.string.isRequired ,// Ensure 'text' is a required string prop
  slides: PropTypes.array.isRequired,
};

export default Carousel2;
