import React from "react";
import SizeXLTypeOutlineIconNoIconCornerRa from "../SizeXLTypeOutlineIconNoIconCornerRa";
import ButtonPrimary from "../ButtonPrimary";
import "./MainLandingPageHero.css";

function MainLandingPageHero(props) {
  const {
    place,
    about,
    about2,
    contactUs,
    ourFeatures,
    img_98722,
    img_98723,
    aboutUs,
    x20,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    sizeXLTypeOutlineIconNoIconCornerRaProps,
    buttonPrimaryProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-landing-page-hero screen">
        <div className="flex-row">
          <div className="place roboto-normal-canary-28px">{place}</div>
          <div className="about roboto-normal-canary-28px">{about}</div>
          <div className="about-1 roboto-normal-canary-28px">{about2}</div>
        </div>
        <div className="overlap-group-1">
          <div className="rectangle-1"></div>
          <div className="contact-us inter-semi-bold-canary-24px">{contactUs}</div>
          <div className="our-features inter-semi-bold-canary-24px">{ourFeatures}</div>
          <img className="img9872" src={img_98722} />
          <img className="img9872" src={img_98723} />
          <SizeXLTypeOutlineIconNoIconCornerRa>
            {sizeXLTypeOutlineIconNoIconCornerRaProps.children}
          </SizeXLTypeOutlineIconNoIconCornerRa>
          <div className="about-us inter-semi-bold-canary-24px">{aboutUs}</div>
        </div>
        <div className="overlap-group1-1">
          <img className="x20" src={x20} />
          <div className="for-students roboto-normal-white-65px">
            <span className="roboto-normal-black-65px">{spanText}</span>
            <span className="roboto-bold-black-65px">{spanText2}</span>
            <span className="roboto-bold-canary-65px">{spanText3}</span>
            <span className="roboto-normal-black-65px">{spanText4}</span>
            <span className="roboto-bold-black-65px">{spanText5}</span>
          </div>
          <div className="by-students roboto-normal-white-65px">
            <span className="roboto-normal-black-65px">{spanText6}</span>
            <span className="roboto-bold-canary-65px">{spanText7}</span>
            <span className="roboto-normal-black-65px">{spanText8}</span>
          </div>
          <div className="text-7 roboto-normal-white-65px">
            <span className="roboto-normal-black-65px">{spanText9}</span>
            <span className="roboto-bold-canary-65px">{spanText10}</span>
            <span className="roboto-normal-black-65px">{spanText11}</span>
          </div>
        </div>
        <ButtonPrimary>{buttonPrimaryProps.children}</ButtonPrimary>
      </div>
    </div>
  );
}

export default MainLandingPageHero;
