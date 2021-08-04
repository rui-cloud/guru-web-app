import React from "react";
import { Link } from "react-router-dom";
import "./AddExtraIncomeOrExpense.css";

function AddExtraIncomeOrExpense(props) {
  const { undo, img_98723, incomeStream, plus, line4, expense, plus2, line5, submit, line3 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="add-extra-income-or-expense screen">
        <div className="flex-row-5">
          <img className="undo" src={undo} />
          <img className="img9872-3-21" src={img_98723} />
        </div>
        <div className="group-20">
          <div className="flex-row-6">
            <Link to="/x-guidance">
              <div className="income-stream lato-normal-mine-shaft-36px">{incomeStream}</div>
            </Link>
            <a href="javascript:ShowOverlay('aeioe-1', 'animate-appear');">
              <img className="plus" src={plus} />
            </a>
          </div>
          <img className="line-4-1" src={line4} />
        </div>
        <a href="javascript:ShowOverlay('aeioe', 'animate-appear');">
          <div className="group-19">
            <div className="flex-row-7">
              <div className="expense lato-normal-mine-shaft-36px">{expense}</div>
              <img className="plus-1" src={plus2} />
            </div>
            <img className="line-5-1" src={line5} />
          </div>
        </a>
        <div className="overlap-group-27">
          <a href="javascript:ShowOverlay('x-guidance', 'animate-appear');">
            <div className="rectangle-18"></div>
          </a>
          <div className="submit">{submit}</div>
        </div>
        <img className="line-3-1" src={line3} />
      </div>
    </div>
  );
}

export default AddExtraIncomeOrExpense;
