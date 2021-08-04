import React from "react";
import "./About.css";

function About(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-2 screen">
        <div className="overlap-group-19">
          <div className="rectangle-1-10"></div>
          <img className="img9872-3-17" src={src} />
        </div>
      </div>
    </div>
  );
}

export default About;
