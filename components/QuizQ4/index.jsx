import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ4.css";

function QuizQ4(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    x4Question,
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
      <div className="quiz-q4 screen">
        <div className="overlap-group1-23">
          <div className="group-12-7">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-11" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-11" src={testAccount} />
            </a>
          </div>
          <div className="group-13-8">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-11" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-11" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-24" src={img_98723} />
        </div>
        <div className="overlap-group-37">
          <div className="overlap-group6-4">
            <div className="question-box-3"></div>
            <div className="x4-question lato-bold-black-144px">{x4Question}</div>
          </div>
          <div className="overlap-group4-9">
            <div className="a-box-3"></div>
            <div className="answer-a-3 lato-bold-black-48px">{answerA}</div>
            <div className="button-6"></div>
            <div className="ellipse-3"></div>
            <div className="ellipse-6-3"></div>
            <div className="a-3 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group3-9">
            <div className="x-box-2"></div>
            <div className="answer-b-3 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-2"></div>
            <div className="button-7 lato-bold-black-48px">{buttonB}</div>
            <div className="ellipse-5-2"></div>
          </div>
          <div className="overlap-group-36">
            <div className="x-box-2"></div>
            <div className="answer-c-3 lato-bold-black-48px">{answerC}</div>
            <div className="button-6"></div>
            <div className="button-7 lato-bold-black-48px">{buttonC}</div>
            <div className="ellipse-3"></div>
          </div>
          <div className="overlap-group-36">
            <div className="x-box-2"></div>
            <div className="answer-d lato-bold-black-48px">{answerD}</div>
            <div className="button-6"></div>
            <div className="d lato-bold-black-48px">{d}</div>
            <div className="ellipse-3"></div>
          </div>
          <div className="flex-row-16">
            <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
            <div className="rectangle-3-2"></div>
            <div className="rectangle-3-2"></div>
            <div className="rectangle-39-2"></div>
            <div className="rectangle-38"></div>
            <div className="rectangle-41-2"></div>
            <div className="rectangle-40-2"></div>
            <div className="rectangle-43"></div>
            <div className="rectangle-42-2"></div>
            <div className="rectangle-4-2"></div>
            <div className="rectangle-4-2"></div>
            <ArrowRight src={arrowRight2Props.src} className={arrowRight2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ4;
