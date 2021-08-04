import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ5.css";

function QuizQ5(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    x5Question,
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
      <div className="quiz-q5 screen">
        <div className="overlap-group1-24">
          <div className="group-12-8">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-12" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-12" src={testAccount} />
            </a>
          </div>
          <div className="group-13-9">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-12" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-12" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-25" src={img_98723} />
        </div>
        <div className="overlap-group-39">
          <div className="overlap-group6-5">
            <div className="question-box-4"></div>
            <div className="x5-question lato-bold-black-144px">{x5Question}</div>
          </div>
          <div className="overlap-group5-5">
            <div className="a-box-4"></div>
            <div className="answer-a-4 lato-bold-black-48px">{answerA}</div>
            <div className="button-8"></div>
            <div className="ellipse-7"></div>
            <div className="ellipse-6-4"></div>
            <div className="a-4 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group2-14">
            <div className="x-box-3"></div>
            <div className="answer-b-4 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-3"></div>
            <div className="button-9 lato-bold-black-48px">{buttonB}</div>
            <div className="ellipse-5-3"></div>
          </div>
          <div className="overlap-group-38">
            <div className="x-box-3"></div>
            <div className="answer-c-4 lato-bold-black-48px">{answerC}</div>
            <div className="button-8"></div>
            <div className="button-9 lato-bold-black-48px">{buttonC}</div>
            <div className="ellipse-7"></div>
          </div>
          <div className="overlap-group-38">
            <div className="x-box-3"></div>
            <div className="answer-d-1 lato-bold-black-48px">{answerD}</div>
            <div className="button-8"></div>
            <div className="d-1 lato-bold-black-48px">{d}</div>
            <div className="ellipse-7"></div>
          </div>
          <div className="flex-row-17">
            <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
            <div className="rectangle-3-3"></div>
            <div className="rectangle-3-3"></div>
            <div className="rectangle-39-3"></div>
            <div className="rectangle-6"></div>
            <div className="rectangle-41-3"></div>
            <div className="rectangle-40-3"></div>
            <div className="rectangle-6"></div>
            <div className="rectangle-42-3"></div>
            <div className="rectangle-4-3"></div>
            <div className="rectangle-4-3"></div>
            <ArrowRight src={arrowRight2Props.src} className={arrowRight2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ5;
