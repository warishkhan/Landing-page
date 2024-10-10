import "./FooterSection.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const FooterSection = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-transparent-container">
        <img
          src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6667bc00241d5c033fa7c729_Gacrux%20(2).webp"
          alt
          loading="lazy"
          className="bg-blur-img"
        />
      </div>
      <div className="footer-container">
        <div className="footer-content-box">
          <div className="left">
            <img
              src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6667c21204782fca0e063277_3rd.svg"
              alt
              loading="lazy"
              className="footer-logo"
            />
            <p>Copyright © 2024, All Right Reserved</p>
            <p>Creatormon Private Limited</p>
            <p>944, Block C, Sushant Lok Phase 1 </p>
            <p>Gurugram, Haryana, 122001</p>
          </div>
          <div className="right">
            <div className="right-inner-container">
              <div className="right-inner-left-con">
                <div className="company">
                  <h3>Company</h3>
                  <p>For Creators</p>
                  <p>For Brands</p>
                  <p>About Us</p>
                </div>
                <div className="resouces">
                  <h3>Resources</h3>
                  <p>For Creators</p>
                  <p>For Brands</p>
                  <p>About Us</p>
                </div>
              </div>
              <div className="right-inner-right-con">
                <div className="social-icons">
                  <FaFacebook size={24} />
                  <FaInstagram size={24}/>
                  <IoLogoLinkedin size={24}/>
                </div>
                <p>For Creators</p>
                <p>For Brands</p>
                <p>About Us</p>
              </div>
            </div>
            <div className="right-inner-lower-con">
              <div className="company">
                <h3>Company</h3>
                <p>For Creators</p>
                <p>For Brands</p>
               
              </div>
              <div className="resources">
                <h3>Resources</h3>
                <p>For Creators</p>
                <p>For Brands</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
