import "./MobileView.css";
import { motion } from "framer-motion";
const MobileView = () => {
  return (
    <div className="m-container">
      <motion.div
        className="m-text"
        initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0.5 }} // Animate only once
      >
        <h2>Join Wishlink and start earning</h2>
        <p>In just 03 easy steps</p>
      </motion.div>
      <div className="scrollable-div-main-con">
        <div className="scrollable-div">
          <div className="item">
            <p className="item-count">01</p>
            <h2 className="h-text">Sign up on Wishlink</h2>
            <p className="item-text">
              Complete the OTP process and create your Wishlink account
            </p>
            <img
              src="https://cdn.prod.website-files.com/666285153da630124c201ec0/666c97b3be7c4ecfc4bf2251_Ellipse%2057.avif"
              loading="lazy"
              alt
              className="m-bg-img"
            />
            <div className="mob-png-vid-con">
              <img
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66dc698ef0ccb52097ca92ba_frame%2012.png"
                loading="lazy"
                alt
                className="mob-upper-img"
              />
              <video autoPlay loop muted className="m-mobile-video">
                <source
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66dee053f7a477b50372a1e3_Gif%20Animation-1-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="item">
            <p className="item-count">02</p>
            <h2 className="h-text">Link your social media</h2>
            <p className="item-text">
              Connect either your Instagram or YouTube account
            </p>
            <img
              src="https://cdn.prod.website-files.com/666285153da630124c201ec0/666c97b3be7c4ecfc4bf2251_Ellipse%2057.avif"
              loading="lazy"
              alt
              className="m-bg-img"
            />
            <div className="mob-png-vid-con">
              <img
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66dc698ef0ccb52097ca92ba_frame%2012.png"
                loading="lazy"
                alt
                className="mob-upper-img"
              />
              <video autoPlay loop muted className="m-mobile-video">
                <source
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66dee086c0104bbbb03c5423_Gif%20Animation-3-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="item">
            <p className="item-count">03</p>
            <h2 className="h-text">Kickstart your earnings</h2>
            <p className="item-text">
              Create youe first post share the link with your audience and begin your earning spree
            </p>
            <img
              src="https://cdn.prod.website-files.com/666285153da630124c201ec0/666c97b3be7c4ecfc4bf2251_Ellipse%2057.avif"
              loading="lazy"
              alt
              className="m-bg-img"
            />
            <div className="mob-png-vid-con">
              <img
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66dc698ef0ccb52097ca92ba_frame%2012.png"
                loading="lazy"
                alt
                className="mob-upper-img"
              />
              <video autoPlay loop muted className="m-mobile-video">
                <source
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66dee06a990be7b723bc1f9e_Gif%20Animation-2-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MobileView;
