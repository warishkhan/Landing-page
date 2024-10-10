import { FaYoutube } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="sub">
        <img
          src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66be815633b50f039c961f57_D2EFBA4F-396F-4648-A4B1-D7713FCB1EFD_1_105_c.png"
          loading="lazy"
          className="sub-img"
        />
        <div className="sub-text">
          <h3>Sana Grover</h3>
          <span>
            @sanagrover | <FaYoutube /> 505k Subscribers{" "}
          </span>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6668ff84b92fd2c64cae74c1_Frame%201116601110%20(2).png"
        loading="lazy"
        alt
        className="transparent-circle"
      />
      <div className="content">
        <p>
          {`"I’ve been on YouTube for the last 07 years and always wished that
          there was a platform like Wishlink. It is truly revolutionary as it
          makes it incredibly simple to share product links in my videos and
          Instagram DMs. It’s much easier for my audience to shop and for me to
          share links while monetising. I would highly recommend Wishlink to all
          Creators!"`}
        </p>
      </div>
    </>
  );
};

export default Card;
