import React from "react";
import { Link } from "react-router-dom";
import "./Q6Form.css";

function Q6Form(props) {
  const { icon, img_98723, asskkdkkdkdkdkdkdk } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q6-form screen">
        <div className="overlap-group-12">
          <div className="rectangle-1-7"></div>
          <Link to="/q5-form">
            <div className="chunk16-arrow-left-5">
              <img className="icon-6" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-10" src={img_98723} />
          <div className="frame-4-9">
            <div className="frame-4-10">
              <div className="asskkdkkdkdkdkdkdk-3 roboto-normal-canary-12px">{asskkdkkdkdkdkdkdk}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q6Form;
