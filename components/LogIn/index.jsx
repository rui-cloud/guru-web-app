import React from "react";
import InputText from "../InputText";
import InputText2 from "../InputText2";
import Saly13 from "../Saly13";
import "./LogIn.css";

function LogIn(props) {
  const {
    icon,
    img_98723,
    loginHere,
    logIn,
    text18,
    xmlid63,
    xmlid62,
    xmlid61,
    xmlid59,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    xmlid57,
    vector14,
    vector15,
    vector16,
    xmlid53,
    vector17,
    vector18,
    vector19,
    vector20,
    vector21,
    vector22,
    vector23,
    vector24,
    vector25,
    vector26,
    xmlid52,
    xmlid51,
    vector27,
    vector28,
    overlapGroup4,
    overlapGroup5,
    vector29,
    vector30,
    vector31,
    vector32,
    overlapGroup8,
    vector33,
    vector34,
    vector35,
    vector36,
    vector37,
    vector38,
    vector39,
    inputTextProps,
    inputText2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in screen">
        <div className="overlap-group1-6">
          <div className="rectangle-1-9"></div>
          <div className="chunk16-arrow-left-7">
            <img className="icon-8" src={icon} />
          </div>
          <img className="img9872-3-12" src={img_98723} />
          <div className="login-here helveticaneue-bold-canary-72px">{loginHere}</div>
        </div>
        <InputText
          inputText={inputTextProps.inputText}
          place={inputTextProps.place}
          className={inputTextProps.className}
        />
        <InputText2
          inputText={inputText2Props.inputText}
          name={inputText2Props.name}
          show={inputText2Props.show}
          className={inputText2Props.className}
        />
        <div className="button-primary-2">
          <div className="log-in-1 inter-semi-bold-black-24px">{logIn}</div>
        </div>
        <div className="flex-row-2">
          <Saly13 />
          <div className="overlap-group-14">
            <div className="text-18">{text18}</div>
            <div className="group">
              <div className="overlap-group2-4">
                <img className="xmlid-6" src={xmlid63} />
                <img className="xmlid-6" src={xmlid62} />
                <img className="xmlid" src={xmlid61} />
                <img className="xmlid" src={xmlid59} />
                <div className="group-1">
                  <div className="overlap-group3-4">
                    <img className="vector" src="/img/vector@2x.svg" />
                    <img className="vector-1" src={vector2} />
                    <img className="vector-2" src={vector3} />
                    <img className="vector-3" src={vector4} />
                    <img className="vector-4" src={vector5} />
                    <img className="vector-5" src={vector6} />
                    <img className="vector-6" src={vector7} />
                    <img className="vector-7" src={vector8} />
                    <img className="vector-8" src={vector9} />
                    <img className="vector-9" src={vector10} />
                    <img className="vector-10" src={vector11} />
                    <img className="vector-11" src={vector12} />
                    <div className="xmlid-55">
                      <div className="overlap-group4-3">
                        <img className="vector-12" src={vector13} />
                        <img className="xmlid-57" src={xmlid57} />
                      </div>
                    </div>
                    <img className="vector-13" src={vector14} />
                    <div className="xmlid-54">
                      <div className="overlap-group5">
                        <img className="vector-14" src={vector15} />
                        <img className="vector-15" src={vector16} />
                      </div>
                    </div>
                    <img className="xmlid-53" src={xmlid53} />
                    <img className="vector-16" src={vector17} />
                    <div className="group-2">
                      <div className="overlap-group6">
                        <img className="vector-17" src={vector18} />
                        <img className="vector-18" src={vector19} />
                        <img className="vector-19" src={vector20} />
                        <img className="vector-20" src={vector21} />
                      </div>
                    </div>
                    <img className="vector-21" src={vector22} />
                    <img className="vector-22" src={vector23} />
                    <img className="vector-23" src={vector24} />
                    <img className="vector-24" src={vector25} />
                    <img className="vector-25" src={vector26} />
                    <img className="xmlid-52" src={xmlid52} />
                    <img className="xmlid-51" src={xmlid51} />
                    <img className="vector-26" src={vector27} />
                    <img className="vector-27" src={vector28} />
                    <div className="group-3">
                      <div className="overlap-group7">
                        <div className="group-4">
                          <div className="overlap-group4-4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                            <div className="overlap-group5-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                              <div className="group-5">
                                <div className="overlap-group6-1">
                                  <img className="vector-28" src={vector29} />
                                  <img className="vector-29" src={vector30} />
                                </div>
                              </div>
                            </div>
                            <img className="vector-30" src={vector31} />
                          </div>
                        </div>
                        <img className="vector-31" src={vector32} />
                        <div className="group-6">
                          <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
                            <img className="vector-32" src={vector33} />
                          </div>
                          <img className="vector-33" src={vector34} />
                          <img className="vector-34" src={vector35} />
                        </div>
                      </div>
                    </div>
                    <img className="vector-35" src={vector36} />
                  </div>
                  <div className="group-7">
                    <img className="vector-36" src={vector37} />
                    <div className="flex-col">
                      <img className="vector-37" src={vector38} />
                      <img className="vector-38" src={vector39} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
