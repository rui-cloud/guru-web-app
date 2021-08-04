import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ3.css";

function QuizQ3(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    text17,
    answerA,
    a,
    answerC,
    answerB,
    buttonB,
    buttonC,
    doubleRight,
    arrowRightProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quiz-q3 screen">
        <div className="overlap-group1-5">
          <div className="group-12">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-2" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-2" src={testAccount} />
            </a>
          </div>
          <div className="group-13-2">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-2" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-2" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-8" src={img_98723} />
        </div>
        <div className="overlap-group-10">
          <div className="overlap-group2-3">
            <div className="question-box"></div>
            <div className="text-17 lato-bold-black-46px">{text17}</div>
          </div>
          <div className="overlap-group4-2">
            <div className="a-box"></div>
            <div className="answer-a lato-bold-black-48px">{answerA}</div>
            <div className="button"></div>
            <Link to="/quiz-landing-page">
              <div className="ellipse"></div>
            </Link>
            <div className="ellipse-6"></div>
            <div className="a lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group3-3">
            <div className="c-box"></div>
            <div className="b-box"></div>
            <div className="answer-c lato-bold-black-48px">{answerC}</div>
            <div className="answer-b lato-bold-black-48px">{answerB}</div>
            <div className="button"></div>
            <div className="button-c"></div>
            <div className="button-b lato-bold-black-48px">{buttonB}</div>
            <div className="button-c-1 lato-bold-black-48px">{buttonC}</div>
            <Link to="/quiz-landing-page">
              <div className="ellipse-4"></div>
            </Link>
            <Link to="/quiz-landing-page">
              <div className="ellipse"></div>
            </Link>
          </div>
          <div className="group-51">
            <Link to="/quiz-landing-page">
              <div className="arrow-left">
                <img className="double-right" src={doubleRight} />
              </div>
            </Link>
            <div className="rectangle-3"></div>
            <div className="rectangle-3"></div>
            <div className="rectangle-39"></div>
            <div className="rectangle"></div>
            <div className="rectangle-41"></div>
            <div className="rectangle-40"></div>
            <div className="rectangle"></div>
            <div className="rectangle-42"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle-4"></div>
            <ArrowRight src={arrowRightProps.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ3;
