import React from "react";
import "./ButtonPrimary.css";

function ButtonPrimary(props) {
  const { children, className } = props;

  return (
    <div className={`button-primary ${className || ""}`}>
      <div className="sign-up inter-semi-bold-black-24px">{children}</div>
    </div>
  );
}

export default ButtonPrimary;
