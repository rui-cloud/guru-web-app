import React from "react";
import "./WidgetMSizeBigLinesChartWithDynamic.css";

function WidgetMSizeBigLinesChartWithDynamic(props) {
  const {
    title,
    text15,
    text16,
    details,
    line2,
    line1,
    name,
    amount,
    chart,
    name2,
    amount2,
    chart2,
    name3,
    amount3,
    chart3,
  } = props;

  return (
    <div className="widget-m-size-b-h-dynamic-table">
      <div className="graph-1">
        <div className="title valign-text-middle">{title}</div>
        <div className="value">
          <div className="frame-158">
            <div className="text-15">{text15}</div>
            <div className="text-16 valign-text-middle">{text16}</div>
          </div>
          <p className="details">{details}</p>
        </div>
        <div className="graph-2">
          <img className="line-2" src={line2} />
          <img className="line-1" src={line1} />
        </div>
      </div>
      <div className="table">
        <div className="row">
          <div className="name-1 opensans-normal-white-14px">{name}</div>
          <div className="amount opensans-normal-blue-bell-14px">{amount}</div>
          <div className="graph">
            <div className="column"></div>
            <div className="column-1"></div>
            <img className="chart" src={chart} />
            <div className="column-2"></div>
            <div className="column-3"></div>
          </div>
        </div>
        <div className="table-item">
          <div className="name-1 opensans-normal-white-14px">{name2}</div>
          <div className="amount opensans-normal-blue-bell-14px">{amount2}</div>
          <div className="graph">
            <div className="column"></div>
            <div className="column-1"></div>
            <img className="chart-1" src={chart2} />
            <div className="column-2"></div>
            <div className="column-3"></div>
          </div>
        </div>
        <div className="table-item">
          <div className="name-1 opensans-normal-white-14px">{name3}</div>
          <div className="amount opensans-normal-blue-bell-14px">{amount3}</div>
          <div className="graph">
            <div className="column"></div>
            <div className="column-1"></div>
            <img className="chart-2" src={chart3} />
            <div className="column-4"></div>
            <div className="column-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetMSizeBigLinesChartWithDynamic;
