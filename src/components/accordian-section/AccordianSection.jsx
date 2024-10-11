import Accordion from "../accordian/Accordian";
import "./AccordianSection.css";
import data from "../../assets/data.json";
import { motion } from 'framer-motion';

const AccordianSection = () => {
  const { accordion } = data;
  return (
    <div className="accor-main-container">
      <motion.div className="accor-text-container"
      initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2>Your launchpad to success!!</h2>
        <p>
          Help your followers shop smarter with great product recommendations
          and{" "}
          <span className="mark-text">
            earn when they shop from your content.
          </span>{" "}
          With Wishlink, you can expand your reach, engage a wider audience, and
          effortlessly manage everything from a single app.
        </p>
      </motion.div>
      <motion.div className="faqs-container"
      initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2>FAQs</h2>
        <p>{`Got questions? We've got answers!`}</p>
      </motion.div>
      <div className="accordion-container">
        {accordion.map((item) => {
          return (
            <Accordion key={item.id} title={item.title}>
              <p>{item.text}</p>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianSection;
