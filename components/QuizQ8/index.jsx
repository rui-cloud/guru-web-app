import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../ArrowRight";
import "./QuizQ8.css";

function QuizQ8(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    x8Question,
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
      <div className="quiz-q8 screen">
        <div className="overlap-group1-27">
          <div className="group-12-11">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-15" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-15" src={testAccount} />
            </a>
          </div>
          <div className="group-13-12">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-15" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-15" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-28" src={img_98723} />
        </div>
        <div className="overlap-group-45">
          <div className="overlap-group6-8">
            <div className="question-box-7"></div>
            <div className="x8-question lato-bold-black-144px">{x8Question}</div>
          </div>
          <div className="overlap-group3-12">
            <div className="a-box-7"></div>
            <div className="answer-a-7 lato-bold-black-48px">{answerA}</div>
            <div className="button-14"></div>
            <div className="ellipse-10"></div>
            <div className="ellipse-6-7"></div>
            <div className="a-7 lato-bold-black-48px">{a}</div>
          </div>
          <div className="overlap-group5-8">
            <div className="x-box-6"></div>
            <div className="answer-b-7 lato-bold-black-48px">{answerB}</div>
            <div className="button-b-box-6"></div>
            <div className="button-15 lato-bold-black-48px">{buttonB}</div>
            <div className="ellipse-5-6"></div>
          </div>
          <div className="overlap-group-44">
            <div className="x-box-6"></div>
            <div className="answer-c-7 lato-bold-black-48px">{answerC}</div>
            <div className="button-14"></div>
            <div className="button-15 lato-bold-black-48px">{buttonC}</div>
            <div className="ellipse-10"></div>
          </div>
          <div className="overlap-group-44">
            <div className="x-box-6"></div>
            <div className="answer-d-4 lato-bold-black-48px">{answerD}</div>
            <div className="button-14"></div>
            <div className="d-4 lato-bold-black-48px">{d}</div>
            <div className="ellipse-10"></div>
          </div>
          <div className="flex-row-20">
            <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
            <div className="rectangle-3-6"></div>
            <div className="rectangle-3-6"></div>
            <div className="rectangle-39-6"></div>
            <div className="rectangle-8"></div>
            <div className="rectangle-41-6"></div>
            <div className="rectangle-40-6"></div>
            <div className="rectangle-8"></div>
            <div className="rectangle-42-6"></div>
            <div className="rectangle-4-6"></div>
            <div className="rectangle-4-6"></div>
            <ArrowRight src={arrowRight2Props.src} className={arrowRight2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQ8;
