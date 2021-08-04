import React from "react";
import "./Group26.css";

function Group26(props) {
  const { byGuru, readMore, notInterested, line11, line12, className } = props;

  return (
    <div className={`group-10-1 ${className || ""}`}>
      <div className="by-guru lato-bold-black-12px">{byGuru}</div>
      <div className="overlap-group8-2">
        <div className="rectangle-34"></div>
        <div className="rectangle-35"></div>
        <div className="read-more lato-bold-blueberry-12px">{readMore}</div>
        <div className="not-interested lato-bold-red-berry-12px">{notInterested}</div>
        <img className="line-11" src={line11} />
        <img className="line-12" src={line12} />
      </div>
    </div>
  );
}

export default Group26;
