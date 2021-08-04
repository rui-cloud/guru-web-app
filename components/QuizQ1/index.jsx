import React from "react";
import { Link } from "react-router-dom";
import "./QuizQ1.css";

function QuizQ1(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    text43,
    answerA,
    a,
    answerB,
    buttonB,
    answerC,
    buttonC,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quiz-q1 screen">
        <div className="overlap-group1-21">
          <div className="group-12-5">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-9" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-9" src={testAccount} />
            </a>
          </div>
          <div className="group-13-7">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-9" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-9" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-23" src={img_98723} />
        </div>
        <div className="overlap-group-34">
          <div className="overlap-group4-8">
            <div className="question-box-2"></div>
            <div className="text-43 lato-bold-black-46px">{text43}</div>
          </div>
          <div className="overlap-group5-4">
            <div className="a-box-2"></div>
            <div className="answer-a-2 lato-bold-black-48px">{answerA}</div>
            <div className="button-4"></div>
            <Link to="/quiz-q2">
              <div className="ellipse-2"></div>
            </Link>
            <div className="ellipse-6-2"></div>
            <div className="a-2 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group3-8">
            <div className="x-box-1"></div>
            <div className="answer-b-2 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-1"></div>
            <div className="button-5 lato-bold-black-48px">{buttonB}</div>
            <Link to="/quiz-q2">
              <div className="ellipse-5-1"></div>
            </Link>
          </div>
          <div className="overlap-group2-12">
            <div className="x-box-1"></div>
            <div className="answer-c-2 lato-bold-black-48px">{answerC}</div>
            <div className="button-4"></div>
            <div className="button-5 lato-bold-black-48px">{buttonC}</div>
            <Link to="/quiz-q2">
              <div className="ellipse-2"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ1;
