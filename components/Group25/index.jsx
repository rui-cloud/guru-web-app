import React from "react";
import "./Group25.css";

function Group25(props) {
  const { address, previous, next, className } = props;

  return (
    <div className={`group-25 ${className || ""}`}>
      <div className="overlap-group-33">
        <div className="address lato-bold-black-18px">{address}</div>
        <div className="rectangle-27"></div>
        <div className="rectangle-28"></div>
        <div className="previous lato-bold-carnation-pink-18px">{previous}</div>
        <div className="next lato-bold-carnation-pink-18px">{next}</div>
      </div>
    </div>
  );
}

export default Group25;
