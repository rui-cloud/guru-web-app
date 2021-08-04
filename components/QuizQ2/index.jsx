import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ2.css";

function QuizQ2(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    text36,
    answerA,
    a,
    answerB,
    buttonB,
    answerC,
    buttonC,
    doubleRight,
    arrowRightProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quiz-q2 screen">
        <div className="overlap-group-21">
          <div className="group-12-2">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-6" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-6" src={testAccount} />
            </a>
          </div>
          <div className="group-13-6">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-6" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-6" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-19" src={img_98723} />
        </div>
        <div className="overlap-group1-11">
          <div className="overlap-group2-7">
            <div className="question-box-1"></div>
            <div className="text-36 lato-bold-black-46px">{text36}</div>
          </div>
          <div className="overlap-group5-3">
            <div className="a-box-1"></div>
            <div className="answer-a-1 lato-bold-black-48px">{answerA}</div>
            <div className="button-2"></div>
            <Link to="/quiz-q3">
              <div className="ellipse-1"></div>
            </Link>
            <div className="ellipse-6-1"></div>
            <div className="a-1 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group4-7">
            <div className="x-box"></div>
            <div className="answer-b-1 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box"></div>
            <div className="button-3 lato-bold-black-48px">{buttonB}</div>
            <Link to="/quiz-q3">
              <div className="ellipse-5"></div>
            </Link>
          </div>
          <div className="overlap-group3-7">
            <div className="x-box"></div>
            <div className="answer-c-1 lato-bold-black-48px">{answerC}</div>
            <div className="button-2"></div>
            <div className="button-3 lato-bold-black-48px">{buttonC}</div>
            <Link to="/quiz-q3">
              <div className="ellipse-1"></div>
            </Link>
          </div>
          <div className="group-51-1">
            <Link to="/quiz-landing-page">
              <div className="arrow-left-2">
                <img className="double-right-8" src={doubleRight} />
              </div>
            </Link>
            <div className="rectangle-36"></div>
            <div className="rectangle-37"></div>
            <div className="rectangle-39-1"></div>
            <div className="rectangle-5"></div>
            <div className="rectangle-41-1"></div>
            <div className="rectangle-40-1"></div>
            <div className="rectangle-5"></div>
            <div className="rectangle-42-1"></div>
            <div className="rectangle-4-1"></div>
            <div className="rectangle-4-1"></div>
            <ArrowRight src={arrowRightProps.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ2;
