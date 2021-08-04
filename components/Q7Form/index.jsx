import React from "react";
import { Link } from "react-router-dom";
import "./Q7Form.css";

function Q7Form(props) {
  const { icon, img_98723, asskkdkkdkdkdkdkdk } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q7-form screen">
        <div className="overlap-group-13">
          <div className="rectangle-1-8"></div>
          <Link to="/q6-form">
            <div className="chunk16-arrow-left-6">
              <img className="icon-7" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-11" src={img_98723} />
          <div className="frame-4-11">
            <div className="frame-4-12">
              <div className="asskkdkkdkdkdkdkdk-4 roboto-normal-canary-12px">{asskkdkkdkdkdkdkdk}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q7Form;
