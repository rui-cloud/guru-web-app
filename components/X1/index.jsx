import React from "react";
import "./X1.css";

function X1(props) {
  const { text37, x26924PerMonth, info, repeat } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x-1 screen">
        <div className="overlap-group-22">
          <div className="text-37 valign-text-middle lato-bold-black-24px">{text37}</div>
          <div className="overlap-group1-12">
            <div className="x26924-per-month lato-bold-black-48px">{x26924PerMonth}</div>
            <img className="info" src={info} />
            <img className="repeat" src={repeat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X1;
