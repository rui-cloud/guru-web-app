import React from "react";
import "./ArrowRight.css";

function ArrowRight(props) {
  const { src, className } = props;

  return (
    <div className={`arrow-right ${className || ""}`}>
      <img className="double-right-6" src={src} />
    </div>
  );
}

export default ArrowRight;
