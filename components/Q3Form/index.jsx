import React from "react";
import { Link } from "react-router-dom";
import "./Q3Form.css";

function Q3Form(props) {
  const { icon, img_98723, asskkdkkdkdkdkdkdk } = props;

  return (
    <div className="container-center-horizontal">
      <div className="q3-form screen">
        <div className="overlap-group-8">
          <div className="rectangle-1-4"></div>
          <Link to="/q2-form">
            <div className="chunk16-arrow-left-2">
              <img className="icon-3" src={icon} />
            </div>
          </Link>
          <img className="img9872-3-6" src={img_98723} />
          <div className="frame-4-3">
            <div className="overlap-group1-4">
              <div className="frame-4-4"></div>
              <div className="frame-5">
                <div className="asskkdkkdkdkdkdkdk roboto-normal-canary-12px">{asskkdkkdkdkdkdkdk}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q3Form;
