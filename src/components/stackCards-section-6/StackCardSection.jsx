import StackCards from '../stack-cards/StackCards';
import './StackCardSection.css'
import { motion } from "framer-motion";

const StackCardSection = () => {
  return (
    <div className='stack-card-main-container'>
<motion.div
        className="stack-card-text-container"
        initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2 className="stack-card-header-text">
          The love we get from our Creators
        </h2>
        
      </motion.div>
      <div>
            <StackCards/>
        </div>
    </div>
  )
}

export default StackCardSection