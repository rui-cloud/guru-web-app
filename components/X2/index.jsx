import React from "react";
import "./X2.css";

function X2(props) {
  const { text40, x3230PerYear, info, repeat } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x-2 screen">
        <div className="overlap-group-25">
          <div className="text-40 valign-text-middle lato-bold-black-24px">{text40}</div>
          <div className="overlap-group1-15">
            <div className="x3230-per-year lato-bold-black-48px">{x3230PerYear}</div>
            <img className="info-2" src={info} />
            <img className="repeat-2" src={repeat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X2;
