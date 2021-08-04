import React from "react";
import { Link } from "react-router-dom";
import SignUpWithUnidaysStudentbeansToRede from "../SignUpWithUnidaysStudentbeansToRede";
import "./DealsFeature.css";

function DealsFeature(props) {
  const {
    xboxMenu,
    testAccount,
    img_98723,
    overlapGroup1,
    text34,
    unidays,
    arrowLeft,
    screenshot20210727At11581,
    screenshot20210727At11582,
    screenshot20210727At11583,
    screenshot20210727At12011,
    arrowRight,
    signUpWithUnidaysStudentbeansToRedeProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="deals-feature screen">
        <div className="overlap-group2-6">
          <div className="group-13-5">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-5" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-5" src={testAccount} />
            </a>
          </div>
          <img className="img9872-3-15" src={img_98723} />
        </div>
        <div className="overlap-group1-10" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="text-34 averagesans-normal-black-72px">{text34}</div>
        </div>
        <div className="overlap-group-17">
          <SignUpWithUnidaysStudentbeansToRede
            text35={signUpWithUnidaysStudentbeansToRedeProps.text35}
            studentbeans={signUpWithUnidaysStudentbeansToRedeProps.studentbeans}
          />
          <a href="https://www.myunidays.com/GB/en-GB/account/register" target="_blank">
            <div className="unidays lato-normal-black-43px">{unidays}</div>
          </a>
        </div>
        <div className="flex-row-4">
          <Link to="/quiz-landing-page">
            <img className="arrow-left-1" src={arrowLeft} />
          </Link>
          <div className="group-49">
            <a href="https://www.myunidays.com/GB/en-GB/partners/prettylittlething/view" target="_blank">
              <img className="screenshot-2021-07-27-at-1158-1" src={screenshot20210727At11581} />
            </a>
            <a href="https://www.myunidays.com/GB/en-GB/partners/asos/view" target="_blank">
              <img className="screenshot-2021-07-27-at-1158-2" src={screenshot20210727At11582} />
            </a>
            <a href="https://www.myunidays.com/GB/en-GB/list/fooddrink-availablenow-d1" target="_blank">
              <img className="screenshot-2021-07-27-at-1158-3" src={screenshot20210727At11583} />
            </a>
            <img className="screenshot-2021-07-27-at-1201-1" src={screenshot20210727At12011} />
          </div>
          <img className="arrow-right-7" src={arrowRight} />
        </div>
      </div>
    </div>
  );
}

export default DealsFeature;
