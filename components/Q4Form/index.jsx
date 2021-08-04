import React from "react";
import { Link } from "react-router-dom";
import "./Q4Form.css";

function Q4Form(props) {
  const { icon, img_98723, asskkdkkdkdkdkdkdk } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q4-form screen">
        <div className="overlap-group-9">
          <div className="rectangle-1-5"></div>
          <Link to="/q3-form">
            <div className="chunk16-arrow-left-3">
              <img className="icon-4" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-7" src={img_98723} />
          <div className="frame-4-5">
            <div className="frame-4-6">
              <div className="asskkdkkdkdkdkdkdk-1 roboto-normal-canary-12px">{asskkdkkdkdkdkdkdk}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q4Form;
