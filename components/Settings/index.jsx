import React from "react";
import "./Settings.css";

function Settings(props) {
  const { icon, img_98723 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings screen">
        <div className="overlap-group-20">
          <img className="icon-9" src={icon} />
          <img className="img9872-3-18" src={img_98723} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
