import React from "react";
import ButtonPrimary2 from "../ButtonPrimary2";
import "./Profile.css";

function Profile(props) {
  const {
    techLifeLifeManagement,
    techLifeCommunication,
    xdelete,
    img_98724,
    kimCarpenterIhignhlvz5QUnsplash1,
    line4,
    anna2UweCoUk,
    phone,
    line3,
    copy,
    copy2,
    gear,
    techLifeVirtualReality,
    techLifeRemoteLife,
    buttonPrimary2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile screen">
        <div className="overlap-group1-19">
          <img className="tech-life-life-management-2" src={techLifeLifeManagement} />
          <img className="tech-life-communication-2" src={techLifeCommunication} />
          <div className="frame-4-14">
            <div className="flex-row-12">
              <img className="delete-1" src={xdelete} />
              <img className="img9872-4" src={img_98724} />
            </div>
            <img className="kim-carpenter-i-z5-q-unsplash-1" src={kimCarpenterIhignhlvz5QUnsplash1} />
            <div className="overlap-group2-11">
              <ButtonPrimary2 className={buttonPrimary2Props.className}>{buttonPrimary2Props.children}</ButtonPrimary2>
              <div className="group-14-1">
                <img className="line-4-2" src={line4} />
                <div className="anna-2uwecouk">{anna2UweCoUk}</div>
                <div className="phone">{phone}</div>
                <img className="line-3-2" src={line3} />
              </div>
            </div>
          </div>
          <img className="copy" src={copy} />
          <img className="copy-1" src={copy2} />
          <img className="gear-1" src={gear} />
        </div>
        <div className="overlap-group-30">
          <img className="tech-life-virtual-reality-2" src={techLifeVirtualReality} />
          <img className="tech-life-remote-life-2" src={techLifeRemoteLife} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
