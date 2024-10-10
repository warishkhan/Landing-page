import Cards from "../cards/Cards";
import "./CardsSection7.css";
import data from '../../assets/data.json'

const CardsSection7 = () => {
  const {swipper} = data;

  return (
    <div className="cardsSection-main-container">
      <div className="cardsSection-text">
        <h3>Are you one of them?</h3>
        <p>
          We work with Creators big and small, up and comers, trendsetters and
          market leaders. We look for creators with interesting stories and
          exceptional content across categories.
        </p>
      </div>
      <div className="horizontal-scroll">
        {swipper.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection7;
