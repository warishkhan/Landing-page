import "./Cards.css";
import PropTypes from "prop-types";

const Cards = ({ item }) => {
  return <div className="cards-main-container">
    <img src={item.images} loading="lazy" alt className="swipper-image"/>
    <div className="swiper_data_wrapper">
      <h3>{item.name}</h3>
    </div>
  </div>;
};

Cards.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Cards;
