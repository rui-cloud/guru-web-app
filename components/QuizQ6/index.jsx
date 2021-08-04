import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ6.css";

function QuizQ6(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    x6Question,
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
      <div className="quiz-q6 screen">
        <div className="overlap-group1-25">
          <div className="group-12-9">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-13" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-13" src={testAccount} />
            </a>
          </div>
          <div className="group-13-10">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-13" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-13" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-26" src={img_98723} />
        </div>
        <div className="overlap-group-41">
          <div className="overlap-group6-6">
            <div className="question-box-5"></div>
            <div className="x6-question lato-bold-black-144px">{x6Question}</div>
          </div>
          <div className="overlap-group5-6">
            <div className="a-box-5"></div>
            <div className="answer-a-5 lato-bold-black-48px">{answerA}</div>
            <div className="button-10"></div>
            <div className="ellipse-8"></div>
            <div className="ellipse-6-5"></div>
            <div className="a-5 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group3-10">
            <div className="x-box-4"></div>
            <div className="answer-b-5 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-4"></div>
            <div className="button-11 lato-bold-black-48px">{buttonB}</div>
            <div className="ellipse-5-4"></div>
          </div>
          <div className="overlap-group-40">
            <div className="x-box-4"></div>
            <div className="answer-c-5 lato-bold-black-48px">{answerC}</div>
            <div className="button-10"></div>
            <div className="button-11 lato-bold-black-48px">{buttonC}</div>
            <div className="ellipse-8"></div>
          </div>
          <div className="overlap-group-40">
            <div className="x-box-4"></div>
            <div className="answer-d-2 lato-bold-black-48px">{answerD}</div>
            <div className="button-10"></div>
            <div className="d-2 lato-bold-black-48px">{d}</div>
            <div className="ellipse-8"></div>
          </div>
          <div className="flex-row-18">
            <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
            <div className="rectangle-3-4"></div>
            <div className="rectangle-3-4"></div>
            <div className="rectangle-39-4"></div>
            <div className="rectangle-7"></div>
            <div className="rectangle-41-4"></div>
            <div className="rectangle-40-4"></div>
            <div className="rectangle-7"></div>
            <div className="rectangle-42-4"></div>
            <div className="rectangle-4-4"></div>
            <div className="rectangle-4-4"></div>
            <ArrowRight src={arrowRight2Props.src} className={arrowRight2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ6;
