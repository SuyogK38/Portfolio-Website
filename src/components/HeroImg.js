import "./HeroImg.css";
import IntroImg from "../assets/intro-bg1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="introimage" />
      </div>
      <div className="content">
        <p>HI, I'M SUYOG KUBDE</p>
        <h1>Fullstack Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
