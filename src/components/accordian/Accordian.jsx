import { useState, useRef } from "react";
import "./Accordian.css"; // Add styles for the accordion
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <div
          style={{
            transition: `transform .5s ease`,
            transform: `${isOpen ? " rotate(180deg)" : "rotate(0deg)"}`,
          }}
        >
          <FaArrowDown size={30}/>
        </div>
      </div>
      <div
        className={`accordion-content ${isOpen ? "active" : ""}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordion-content-inner">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired, // Ensure 'text' is a required string prop
  children: PropTypes.string.isRequired, // Ensure 'text' is a required string prop
};

export default Accordion;
