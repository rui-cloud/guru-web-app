import React from "react";
import { Link } from "react-router-dom";
import Group41 from "../Group41";
import Group40 from "../Group40";
import Group54 from "../Group54";
import Group42 from "../Group42";
import "./MoneyTipsFeature2.css";

function MoneyTipsFeature2(props) {
  const {
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    screenshot20210727At13032,
    xboxMenu,
    testAccount,
    img_98723,
    group54Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="moneytips-feature2 screen">
        <div className="overlap-group1-2">
          <Group41 />
          <Group40 />
          <div className="text-8 lato-bold-black-72px">{text8}</div>
          <Link to="/moneytips-feature3">
            <div className="group-40-5">
              <div className="overlap-group2-2">
                <div className="text-9 lato-bold-black-36px">{text9}</div>
              </div>
            </div>
          </Link>
          <Group54>{group54Props.children}</Group54>
          <div className="group-53-1">
            <div className="overlap-group4-1">
              <Group42 />
              <div className="text-10 averagesans-normal-black-36px">{text10}</div>
            </div>
          </div>
          <div className="text-11 lato-bold-black-64px">{text11}</div>
          <div className="text-12 lato-bold-black-64px">{text12}</div>
          <div className="text-13 lato-bold-black-72px">{text13}</div>
          <img className="screenshot-2021-07-27-at-1303-2-1" src={screenshot20210727At13032} />
        </div>
        <div className="overlap-group-2">
          <div className="group-13-1">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-1" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-1" src={testAccount} />
            </a>
          </div>
          <img className="img9872-3-1" src={img_98723} />
        </div>
      </div>
    </div>
  );
}

export default MoneyTipsFeature2;
