import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from "react";
import Fullstack from "../assets/fullstack1.jpg";
import Mern from "../assets/mern.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          I'm Fullstack Developer who creates responsive , secured websites for
          clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me !</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Mern} className="img" alt="fullstack" />
          </div>
          <div className="img-stack bottom">
            <img src={Fullstack} className="img" alt="mernstack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
