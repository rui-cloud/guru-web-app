import React from "react";
import { Link } from "react-router-dom";
import "./StudentDeals.css";

function StudentDeals(props) {
  const {
    xboxMenu,
    testAccount,
    img_98722,
    quizBox,
    text44,
    text46,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    arrowLeft,
    screenshot20210727At11581,
    screenshot20210727At11582,
    screenshot20210727At11583,
    screenshot20210727At12011,
    arrowRight,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="student-deals screen">
        <div className="overlap-group-35">
          <div className="group-12-6">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-10" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-10" src={testAccount} />
            </a>
          </div>
          <img className="img9872-2-1" src={img_98722} />
        </div>
        <div className="overlap-group2-13">
          <img className="quiz-box" src={quizBox} />
          <div className="text-44 averagesans-normal-black-72px">{text44}</div>
          <div className="text-46 averagesans-normal-black-72px">{text46}</div>
        </div>
        <div className="overlap-group1-22">
          <div className="text-45 lato-normal-black-43px">
            <span className="lato-normal-black-43px">{spanText}</span>
            <span className="span-2 lato-normal-black-43px">{spanText2}</span>
            <span className="lato-normal-black-43px">{spanText3}</span>
            <span className="span-2 lato-normal-black-43px">{spanText4}</span>
            <span className="lato-normal-black-43px">{spanText5}</span>
          </div>
        </div>
        <div className="flex-row-15">
          <Link to="/quiz-landing-page">
            <img className="arrow-left-3" src={arrowLeft} />
          </Link>
          <div className="group-49-1">
            <img className="screenshot-2021-07-27-at-1158-1-1" src={screenshot20210727At11581} />
            <img className="screenshot-2021-07-27-at-1" src={screenshot20210727At11582} />
            <img className="screenshot-2021-07-27-at-1158-3-1" src={screenshot20210727At11583} />
            <img className="screenshot-2021-07-27-at-1" src={screenshot20210727At12011} />
          </div>
          <img className="arrow-right-8" src={arrowRight} />
        </div>
      </div>
    </div>
  );
}

export default StudentDeals;
