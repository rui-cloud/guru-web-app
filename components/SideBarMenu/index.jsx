import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary2 from "../ButtonPrimary2";
import "./SideBarMenu.css";

function SideBarMenu(props) {
  const {
    techLifeLifeManagement,
    techLifeCommunication,
    xdelete,
    text39,
    line4,
    financialQuiz,
    line5,
    smartmoneyTips,
    line6,
    dealsOfTheDay,
    line7,
    jobOpportunities,
    line3,
    handshake,
    newJob,
    gear,
    tuition,
    exam,
    cardWallet,
    img_98723,
    techLifeVirtualReality,
    techLifeRemoteLife,
    buttonPrimary2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="side-bar-menu screen">
        <div className="overlap-group-24">
          <img className="tech-life-life-management-1" src={techLifeLifeManagement} />
          <img className="tech-life-communication-1" src={techLifeCommunication} />
          <div className="frame-4-13">
            <img className="delete" src={xdelete} />
            <div className="overlap-group2-8">
              <div className="group-14">
                <Link to="/x-guidance" className="align-self-flex-center">
                  <div className="text-39 lato-normal-mine-shaft-36px">{text39}</div>
                </Link>
                <img className="line-4" src={line4} />
                <div className="financial-quiz-2 lato-normal-mine-shaft-36px">{financialQuiz}</div>
                <img className="line-5" src={line5} />
                <div className="smart-money-tips lato-normal-mine-shaft-36px">{smartmoneyTips}</div>
                <img className="line-6" src={line6} />
                <div className="deals-of-the-day lato-normal-mine-shaft-36px">{dealsOfTheDay}</div>
                <img className="line-7" src={line7} />
                <div className="job-opportunities lato-normal-mine-shaft-36px">{jobOpportunities}</div>
                <img className="line-3" src={line3} />
              </div>
              <img className="handshake" src={handshake} />
              <img className="new-job" src={newJob} />
            </div>
            <ButtonPrimary2>{buttonPrimary2Props.children}</ButtonPrimary2>
          </div>
          <Link to="/settings">
            <img className="gear" src={gear} />
          </Link>
          <img className="tuition" src={tuition} />
          <img className="exam" src={exam} />
          <img className="card-wallet" src={cardWallet} />
          <img className="img9872-3-20" src={img_98723} />
        </div>
        <div className="overlap-group1-14">
          <img className="tech-life-virtual-reality-1" src={techLifeVirtualReality} />
          <img className="tech-life-remote-life-1" src={techLifeRemoteLife} />
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
