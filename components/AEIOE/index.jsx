import React from "react";
import "./AEIOE.css";

function AEIOE(props) {
  const { title, paycheck1, line9, edit, amount, price, line8, edit2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="aeioe-1 screen">
        <div className="overlap-group-28">
          <div className="group-16"></div>
          <div className="group-21">
            <div className="flex-row-8">
              <div className="title-2 lato-bold-black-36px">{title}</div>
              <div className="overlap-group1-17">
                <div className="paycheck-1 lato-bold-black-36px">{paycheck1}</div>
                <img className="line-9" src={line9} />
              </div>
              <img className="edit" src={edit} />
            </div>
            <div className="flex-row-9">
              <div className="overlap-group2-9">
                <div className="amount-1 lato-bold-black-36px">{amount}</div>
                <div className="price-2 lato-bold-black-36px">{price}</div>
                <img className="line-8" src={line8} />
              </div>
              <img className="edit" src={edit2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AEIOE;
