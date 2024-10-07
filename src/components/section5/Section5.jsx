import "./Section5.css";
import VerticalCarousel from "../vertical-scroll/VerticalCarousel";

const Section5 = () => {
 
  return (
    <div className="section5-main-container">
      <div className="centered-div">
        <div className="text-div">
          <div className="fixed-div">
            <h2>Join Wishlink and start earning</h2>
          </div>
         <p>In just 03 easy steps</p>
            <VerticalCarousel/>
        </div>
        <div className="img-video-div">
          <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/666c97b3be7c4ecfc4bf2251_Ellipse%2057.avif" loading="lazy" alt className="bg-img"/>
          <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66dc698ef0ccb52097ca92ba_frame%2012.png" loading="lazy" alt className="upper-img"/>
          <video autoPlay loop muted className="mobile-video">
            <source  src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66dee053f7a477b50372a1e3_Gif%20Animation-1-transcode.mp4"
            type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section5;
