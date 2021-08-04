import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ7.css";

function QuizQ7(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    x7Question,
    answerA,
    a,
    answerB,
    buttonB,
    answerC,
    buttonC,
    answerD,
    d,
    arrowRightProps,
    arrowRight2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quiz-q7 screen">
        <div className="overlap-group1-26">
          <div className="group-12-10">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-14" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-14" src={testAccount} />
            </a>
          </div>
          <div className="group-13-11">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-14" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-14" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-27" src={img_98723} />
        </div>
        <div className="overlap-group-43">
          <div className="overlap-group6-7">
            <div className="question-box-6"></div>
            <div className="x7-question lato-bold-black-144px">{x7Question}</div>
          </div>
          <div className="overlap-group3-11">
            <div className="a-box-6"></div>
            <div className="answer-a-6 lato-bold-black-48px">{answerA}</div>
            <div className="button-12"></div>
            <div className="ellipse-9"></div>
            <div className="ellipse-6-6"></div>
            <div className="a-6 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group5-7">
            <div className="x-box-5"></div>
            <div className="answer-b-6 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-5"></div>
            <div className="button-13 lato-bold-black-48px">{buttonB}</div>
            <div className="ellipse-5-5"></div>
          </div>
          <div className="overlap-group-42">
            <div className="x-box-5"></div>
            <div className="answer-c-6 lato-bold-black-48px">{answerC}</div>
            <div className="button-12"></div>
            <div className="button-13 lato-bold-black-48px">{buttonC}</div>
            <div className="ellipse-9"></div>
          </div>
          <div className="overlap-group-42">
            <div className="x-box-5"></div>
            <div className="answer-d-3 lato-bold-black-48px">{answerD}</div>
            <div className="button-12"></div>
            <div className="d-3 lato-bold-black-48px">{d}</div>
            <div className="ellipse-9"></div>
          </div>
          <div className="flex-row-19">
            <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
            <div className="rectangle-3-5"></div>
            <div className="rectangle-3-5"></div>
            <div className="rectangle-39-5"></div>
            <div className="rectangle-38-1"></div>
            <div className="rectangle-41-5"></div>
            <div className="rectangle-40-5"></div>
            <div className="rectangle-43-1"></div>
            <div className="rectangle-42-5"></div>
            <div className="rectangle-4-5"></div>
            <div className="rectangle-4-5"></div>
            <ArrowRight src={arrowRight2Props.src} className={arrowRight2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ7;
