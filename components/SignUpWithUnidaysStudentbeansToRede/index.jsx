import React from "react";
import "./SignUpWithUnidaysStudentbeansToRede.css";

function SignUpWithUnidaysStudentbeansToRede(props) {
  const { text35, studentbeans } = props;

  return (
    <div className="sign-up-with-un-discount-codes">
      <div className="overlap-group3-6">
        <div className="text-35 lato-normal-black-43px">{text35}</div>
        <a
          href="https://accounts.studentbeans.com/uk/authorisation/sign-up?client_id=e55920fd-5410-4534-b926-b1214c85f64a&user_return_to=https%3A%2F%2Fwww.studentbeans.com%2Fuk"
          target="_blank"
        >
          <div className="studentbeans lato-normal-black-43px">{studentbeans}</div>
        </a>
      </div>
    </div>
  );
}

export default SignUpWithUnidaysStudentbeansToRede;
