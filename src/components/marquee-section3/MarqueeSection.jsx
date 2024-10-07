import "./MarqueeSection.css";
import { motion } from "framer-motion";
import data from '../../assets/data.json'
import { BiLogoInstagramAlt } from "react-icons/bi";

const MarqueeSection = () => {
  
  
  const cards = data?.data?.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-inner">
        <div className="card-front">
          <img src={item.images}/>
        </div>
        <div className="card-back">
          <h2 className="c-back-name">{item.name}</h2>
          <div className="c-back-icon-container">
          <BiLogoInstagramAlt />
          <p className="c-back-username">{item.username}</p>
          </div>
          <p className="c-back-username">{item.followers}</p>
          <button className="back-btn">My Whislink Shop</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="marquee-main-container">
      <motion.div
        className="marquee-text-container"
        initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2 className="marquee-header-text">
          Loved by Creators, trusted by Brands
        </h2>
        <p className="marquee-text">
          {" "}
          Join forces with fellow Creators, partner with leading Brands like
          never before
        </p>
      </motion.div>

      <div className="mar-main-cont">
      <div className="marquee-container">
        <div className="marquee">{[...cards, ...cards]}</div>
      </div>
      <div className="marquee-container">
        <div className="marquee-middle">{[...cards, ...cards]}</div>
      </div>
      <div className="marquee-container">
        <div className="marquee">{[...cards, ...cards]}</div>
      </div>
      </div>

      
    </div>
  );
};

export default MarqueeSection;
