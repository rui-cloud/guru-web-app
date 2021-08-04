import React from "react";
import { Link } from "react-router-dom";
import "./QuizLandingPage.css";

function QuizLandingPage(props) {
  const {
    xboxMenu,
    testAccount,
    xboxMenu2,
    testAccount2,
    img_98723,
    title,
    financialQuiz,
    financialQuiz2,
    leaderboard,
    leaderboard2,
    leaderboard3,
    text31,
    text32,
    text33,
    text28,
    text30,
    button,
    text25,
    text26,
    text27,
    text29,
    startNow,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="quiz-landing-page screen">
        <div className="overlap-group1-9">
          <div className="group-12-1">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-4" src={xboxMenu} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-4" src={testAccount} />
            </a>
          </div>
          <div className="group-13-4">
            <a href="javascript:ShowOverlay('side-bar-menu', 'animate-appear');">
              <img className="xbox-menu-4" src={xboxMenu2} />
            </a>
            <a href="javascript:ShowOverlay('profile', 'animate-appear');">
              <img className="test-account-4" src={testAccount2} />
            </a>
          </div>
          <img className="img9872-3-14" src={img_98723} />
        </div>
        <div className="overlap-group-16">
          <div className="overlap-group4-6">
            <h1 className="title-1">{title}</h1>
            <div className="financial-quiz">{financialQuiz}</div>
            <div className="financial-quiz-1">{financialQuiz2}</div>
          </div>
          <div className="flex-row-3">
            <div className="overlap-group2-5">
              <div className="group-36">
                <div className="overlap-group8-1">
                  <div className="leaderboard">{leaderboard}</div>
                  <div className="leaderboard-1">{leaderboard2}</div>
                  <div className="leaderboard-2">{leaderboard3}</div>
                </div>
              </div>
              <div className="overlap-group5-2">
                <div className="text-3-1 roboto-normal-gray-36px">{text31}</div>
              </div>
              <div className="overlap-group6-2">
                <div className="text-3-1 roboto-normal-gray-36px">{text32}</div>
              </div>
              <div className="overlap-group7-1">
                <div className="text-33 roboto-normal-gray-36px">{text33}</div>
              </div>
            </div>
            <div className="flex-col-1">
              <div className="overlap-group3-5">
                <div className="overlap-group1-8">
                  <div className="text-28 roboto-normal-canary-48px">{text28}</div>
                  <div className="text-30">{text30}</div>
                </div>
                <div className="overlap-group9">
                  <div className="button-1">{button}</div>
                  <div className="text-25">{text25}</div>
                  <div className="text-26">{text26}</div>
                </div>
                <div className="overlap-group1-8">
                  <div className="text-27 roboto-normal-canary-48px">{text27}</div>
                  <div className="text-29">{text29}</div>
                </div>
              </div>
              <div className="group-35">
                <div className="overlap-group12">
                  <div className="start-now lato-bold-black-72px">{startNow}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizLandingPage;
