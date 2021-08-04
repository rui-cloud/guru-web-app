import React from "react";
import { Link } from "react-router-dom";
import Group41 from "../Group41";
import Group40 from "../Group40";
import Group402 from "../Group402";
import Group54 from "../Group54";
import Group42 from "../Group42";
import "./MoneyTipsFeature3.css";

function MoneyTipsFeature3(props) {
  const {
    text1,
    text3,
    text4,
    text5,
    text6,
    screenshot20210727At13032,
    xboxMenu,
    testAccount,
    img_98723,
    group402Props,
    group54Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="moneytips-feature3 screen">
        <div className="overlap-group1">
          <Group41 />
          <Group40 />
          <div className="text-1 lato-bold-black-72px">{text1}</div>
          <Group402>{group402Props.children}</Group402>
          <Group54>{group54Props.children}</Group54>
          <div className="group-53">
            <div className="overlap-group4">
              <Group42 />
              <div className="text-3 averagesans-normal-black-36px">{text3}</div>
            </div>
          </div>
          <div className="text-4 lato-bold-black-64px">{text4}</div>
          <div className="text-5 lato-bold-black-64px">{text5}</div>
          <div className="text-6 lato-bold-black-72px">{text6}</div>
          <img className="screenshot-2021-07-27-at-1303-2" src={screenshot20210727At13032} />
        </div>
        <div className="overlap-group">
          <div className="group-13">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account" src={testAccount} />
            </a>
          </div>
          <img className="img9872-3" src={img_98723} />
        </div>
      </div>
    </div>
  );
}

export default MoneyTipsFeature3;
