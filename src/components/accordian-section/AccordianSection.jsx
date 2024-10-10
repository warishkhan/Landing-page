import Accordion from "../accordian/Accordian";
import "./AccordianSection.css";
import data from "../../assets/data.json";

const AccordianSection = () => {
  const { accordion } = data;
  return (
    <div className="accor-main-container">
      <div className="accor-text-container">
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
      </div>
      <div className="faqs-container">
        <h2>FAQs</h2>
        <p>{`Got questions? We've got answers!`}</p>
      </div>
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
