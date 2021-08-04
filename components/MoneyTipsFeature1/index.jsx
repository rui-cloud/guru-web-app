import React from "react";
import { Link } from "react-router-dom";
import Group41 from "../Group41";
import Group40 from "../Group40";
import Group402 from "../Group402";
import Group54 from "../Group54";
import Group42 from "../Group42";
import "./MoneyTipsFeature1.css";

function MoneyTipsFeature1(props) {
  const {
    screenshot20210727At13032,
    text19,
    spanText,
    spanText2,
    text22,
    text23,
    text24,
    xboxMenu,
    testAccount,
    img_98723,
    group402Props,
    group54Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="moneytips-feature1 screen">
        <div className="overlap-group-15">
          <Group41 />
          <Group40 />
          <img className="screenshot-2021-07-27-at-1303-2-2" src={screenshot20210727At13032} />
          <div className="text-19 lato-bold-black-72px">{text19}</div>
          <Group402>{group402Props.children}</Group402>
          <Group54>{group54Props.children}</Group54>
          <div className="group-53-2">
            <div className="overlap-group4-5">
              <Group42 />
              <div className="text-21 averagesans-normal-black-36px">
                <span className="span0 averagesans-normal-black-36px">{spanText}</span>
                <span className="averagesans-normal-black-36px">{spanText2}</span>
              </div>
            </div>
          </div>
          <div className="text-22 lato-bold-black-64px">{text22}</div>
          <div className="text-23 lato-bold-black-64px">{text23}</div>
          <div className="text-24 lato-bold-black-72px">{text24}</div>
        </div>
        <div className="overlap-group1-7">
          <div className="group-13-3">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-3" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-3" src={testAccount} />
            </a>
          </div>
          <img className="img9872-3-13" src={img_98723} />
        </div>
      </div>
    </div>
  );
}

export default MoneyTipsFeature1;
