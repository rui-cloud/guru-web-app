import React from "react";
import "./Temp2.css";

function Temp2(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="temp-2 screen">
        <div className="overlap-group-4">
          <img className="img9872-3-3" src={src} />
        </div>
      </div>
    </div>
  );
}

export default Temp2;
