import React from "react";
import { Link } from "react-router-dom";
import "./Q5Form.css";

function Q5Form(props) {
  const { icon, img_98723, asskkdkkdkdkdkdkdk } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q5-form screen">
        <div className="overlap-group-11">
          <div className="rectangle-1-6"></div>
          <Link to="/q4-form">
            <div className="chunk16-arrow-left-4">
              <img className="icon-5" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-9" src={img_98723} />
          <div className="frame-4-7">
            <div className="frame-4-8">
              <div className="asskkdkkdkdkdkdkdk-2 roboto-normal-canary-12px">{asskkdkkdkdkdkdkdk}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q5Form;
