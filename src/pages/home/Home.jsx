// src/pages/home/Home.js
import { useInView } from "framer-motion";
import "./Home.css";
import { useRef } from "react";
import Sticky from "../../components/sticky/Sticky";
import HeroSection2 from "../../components/hero-section2/HeroSection2";
import MarqueeSection from "../../components/marquee-section3/MarqueeSection";
import Carousel1 from "../../components/carousel1/Carousel1";
import data from "../../assets/data.json";
import Carousel2 from "../../components/carousel2/Carousel2";
import Section5 from "../../components/section5/Section5";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  const { slides, slides2 ,slides3} = data;

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className="hero-section home">
        <video autoPlay loop muted className="background-video">
          <source
            src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66cfcfc01d8bac1df212bee5_Hero%20Video%2015%20MB%20%281%29-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {isInView && <Sticky />}

      <div className="additional-content">
        <section className="hero-section2" ref={ref}>
          <HeroSection2 />
          <MarqueeSection />
          <Carousel1
            text={"Unlock the influence and maximize your earnings"}
            slides={slides}
            second={false}
          />
          <Carousel1
            text={"Wishlink essentials: tools and features to help you succeed"}
            slides={slides2}
            second={true}
          />
          <Carousel2 text={'Discover and explore endless possibilities with Wishlink'} slides={slides3}/>
          <Section5/>
        </section>
      </div>
    </div>
  );
};

export default Home;
