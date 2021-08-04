import React from "react";
import { Link } from "react-router-dom";
import "./XGuidance.css";

function XGuidance(props) {
  const {
    xboxMenu,
    img_98723,
    img_98724,
    testAccount,
    techLifeLifeManagement,
    techLifeCommunication,
    techLifeVirtualReality,
    group7,
    incomeTotal,
    price,
    expenseTotal,
    x450000,
    annualBalance,
    price2,
    group72,
    line1,
    text38,
    x6731PerWeek,
    info,
    rectangle11,
    repeat,
    techLifeRemoteLife,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x-guidance screen">
        <div className="group-12-3">
          <div className="overlap-group1-13">
            <div className="rectangle-3-1"></div>
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-7" src={xboxMenu} />
            </a>
            <img className="img9872-1" src={img_98723} />
            <img className="img9872-1" src={img_98724} />
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-7" src={testAccount} />
            </a>
          </div>
        </div>
        <div className="overlap-group-23">
          <img className="tech-life-life-management" src={techLifeLifeManagement} />
          <img className="tech-life-communication" src={techLifeCommunication} />
          <img className="tech-life-virtual-reality" src={techLifeVirtualReality} />
          <div className="rectangle-14"></div>
          <div className="rectangle-15"></div>
          <div className="rectangle-16"></div>
          <img className="group-7-1" src={group7} />
          <div className="rectangle-14-1"></div>
          <div className="group-7-2">
            <div className="income-total lato-bold-black-24px">{incomeTotal}</div>
            <div className="price">{price}</div>
          </div>
          <div className="group-8">
            <div className="expense-total lato-bold-black-24px">{expenseTotal}</div>
            <div className="x450000">{x450000}</div>
          </div>
          <div className="group-9">
            <div className="annual-balance lato-bold-black-24px">{annualBalance}</div>
            <div className="price-1">{price2}</div>
          </div>
          <img className="group-7-3" src={group72} />
          <div className="rectangle-15-1"></div>
          <img className="line-1-1" src={line1} />
          <div className="text-38 valign-text-middle lato-bold-black-24px">{text38}</div>
          <div className="x6731-per-week lato-bold-black-48px">{x6731PerWeek}</div>
          <img className="info-1" src={info} />
          <img className="rectangle-11" src={rectangle11} />
          <a href="javascript:ShowOverlay('x-1', 'animate-appear');">
            <img className="repeat-1" src={repeat} />
          </a>
          <img className="tech-life-remote-life" src={techLifeRemoteLife} />
        </div>
      </div>
    </div>
  );
}

export default XGuidance;
