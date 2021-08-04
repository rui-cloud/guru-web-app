import React from "react";
import "./InputText2.css";

function InputText2(props) {
  const { inputText, name, show, className } = props;

  return (
    <div className={`input-text-3 ${className || ""}`} style={{ backgroundImage: `url(${inputText})` }}>
      <div className="name inter-medium-silver-16px">{name}</div>
      <div className="show inter-medium-aqua-forest-16px">{show}</div>
    </div>
  );
}

export default InputText2;
