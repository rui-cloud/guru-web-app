import React from "react";
import { Link } from "react-router-dom";
import "./Q1Form.css";

function Q1Form(props) {
  const { icon, img_98723 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q1-form screen">
        <div className="overlap-group-6">
          <div className="rectangle-1-2"></div>
          <Link to="/sign-up">
            <div className="chunk16-arrow-left">
              <img className="icon-1" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-4" src={img_98723} />
          <div className="frame-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Q1Form;
