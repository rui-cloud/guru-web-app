import React from "react";
import "./ButtonPrimary2.css";

function ButtonPrimary2(props) {
  const { children, className } = props;

  return (
    <div className={`button-primary-3 ${className || ""}`}>
      <div className="log-out inter-semi-bold-carnation-pink-24px">{children}</div>
    </div>
  );
}

export default ButtonPrimary2;
