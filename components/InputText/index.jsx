import React from "react";
import "./InputText.css";

function InputText(props) {
  const { inputText, place, className } = props;

  return (
    <div className={`input-text ${className || ""}`} style={{ backgroundImage: `url(${inputText})` }}>
      <div className="place-1 inter-medium-silver-16px">{place}</div>
    </div>
  );
}

export default InputText;
