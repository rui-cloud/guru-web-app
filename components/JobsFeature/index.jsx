import React from "react";
import { Link } from "react-router-dom";
import Group25 from "../Group25";
import Group26 from "../Group26";
import "./JobsFeature.css";

function JobsFeature(props) {
  const {
    xboxMenu,
    testAccount,
    img_98723,
    text42,
    guru,
    detective,
    line10,
    devopsEngineer,
    dataEngineer,
    dataScientistJr,
    businessAnalyst,
    cloudEngineer,
    analystJr,
    group25Props,
    group26Props,
    group262Props,
    group263Props,
    group264Props,
    group265Props,
    group266Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="jobs-feature screen">
        <div className="overlap-group6-3">
          <div className="group-12-4">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-8" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-8" src={testAccount} />
            </a>
          </div>
          <img className="img9872-3-22" src={img_98723} />
        </div>
        <div className="text-42 lato-bold-black-36px">{text42}</div>
        <div className="overlap-group1-20">
          <div className="guru">{guru}</div>
          <img className="detective" src={detective} />
        </div>
        <img className="line-10" src={line10} />
        <Group25 address={group25Props.address} previous={group25Props.previous} next={group25Props.next} />
        <div className="flex-row-14">
          <div className="overlap-group-31">
            <div className="rectangle-2-1"></div>
            <div className="devops-engineer lato-bold-black-18px">{devopsEngineer}</div>
            <Group26
              byGuru={group26Props.byGuru}
              readMore={group26Props.readMore}
              notInterested={group26Props.notInterested}
              line11={group26Props.line11}
              line12={group26Props.line12}
            />
          </div>
          <div className="overlap-group-32">
            <div className="rectangle-2-1"></div>
            <div className="data-engineer lato-bold-black-18px">{dataEngineer}</div>
            <Group26
              byGuru={group262Props.byGuru}
              readMore={group262Props.readMore}
              notInterested={group262Props.notInterested}
              line11={group262Props.line11}
              line12={group262Props.line12}
            />
          </div>
        </div>
        <div className="flex-row-13">
          <div className="overlap-group-31">
            <div className="rectangle-2-1"></div>
            <div className="data-scientist-jr lato-bold-black-18px">{dataScientistJr}</div>
            <Group26
              byGuru={group263Props.byGuru}
              readMore={group263Props.readMore}
              notInterested={group263Props.notInterested}
              line11={group263Props.line11}
              line12={group263Props.line12}
              className={group263Props.className}
            />
          </div>
          <div className="overlap-group-32">
            <div className="rectangle-2-1"></div>
            <div className="business-analyst lato-bold-black-18px">{businessAnalyst}</div>
            <Group26
              byGuru={group264Props.byGuru}
              readMore={group264Props.readMore}
              notInterested={group264Props.notInterested}
              line11={group264Props.line11}
              line12={group264Props.line12}
              className={group264Props.className}
            />
          </div>
        </div>
        <div className="flex-row-13">
          <div className="overlap-group-31">
            <div className="rectangle-2-1"></div>
            <div className="cloud-engineer lato-bold-black-18px">{cloudEngineer}</div>
            <Group26
              byGuru={group265Props.byGuru}
              readMore={group265Props.readMore}
              notInterested={group265Props.notInterested}
              line11={group265Props.line11}
              line12={group265Props.line12}
            />
          </div>
          <div className="overlap-group-32">
            <div className="rectangle-2-1"></div>
            <div className="analyst-jr lato-bold-black-18px">{analystJr}</div>
            <Group26
              byGuru={group266Props.byGuru}
              readMore={group266Props.readMore}
              notInterested={group266Props.notInterested}
              line11={group266Props.line11}
              line12={group266Props.line12}
            />
          </div>
        </div>
        <Group25
          address={group252Props.address}
          previous={group252Props.previous}
          next={group252Props.next}
          className={group252Props.className}
        />
      </div>
    </div>
  );
}

export default JobsFeature;
