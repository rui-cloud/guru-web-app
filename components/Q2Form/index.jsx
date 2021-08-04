import React from "react";
import { Link } from "react-router-dom";
import "./Q2Form.css";

function Q2Form(props) {
  const { icon, img_98723, lalala } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q2-form screen">
        <div className="overlap-group-7">
          <div className="rectangle-1-3"></div>
          <Link to="/q1-form">
            <div className="chunk16-arrow-left-1">
              <img className="icon-2" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-5" src={img_98723} />
          <div className="frame-4-1">
            <div className="frame-4-2">
              <div className="lalala roboto-normal-canary-12px">{lalala}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q2Form;
