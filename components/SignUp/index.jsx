import React from "react";
import InputText from "../InputText";
import InputText2 from "../InputText2";
import ButtonPrimary from "../ButtonPrimary";
import "./SignUp.css";

function SignUp(props) {
  const {
    rectangle1,
    icon,
    img_98723,
    overlapGroup1,
    signUpHere,
    text14,
    inputTextProps,
    inputText2Props,
    inputText2Props2,
    buttonPrimaryProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-2 screen">
        <div className="overlap-group-3">
          <img className="rectangle-1-1" src={rectangle1} />
          <img className="icon" src={icon} />
          <img className="img9872-3-2" src={img_98723} />
        </div>
        <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="sign-up-here helveticaneue-bold-canary-72px">{signUpHere}</div>
          <InputText inputText={inputTextProps.inputText} place={inputTextProps.place} />
          <InputText
            inputText={inputText2Props.inputText}
            place={inputText2Props.place}
            className={inputText2Props.className}
          />
          <InputText2
            inputText={inputText2Props2.inputText}
            name={inputText2Props2.name}
            show={inputText2Props2.show}
          />
          <div className="flex-row-1">
            <div className="checkbox-empty"></div>
            <p className="text-14">{text14}</p>
          </div>
          <ButtonPrimary className={buttonPrimaryProps.className}>{buttonPrimaryProps.children}</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
