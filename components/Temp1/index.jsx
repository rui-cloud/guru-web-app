import React from "react";
import WidgetMSizeBigLinesChartWithDynamic from "../WidgetMSizeBigLinesChartWithDynamic";
import "./Temp1.css";

function Temp1(props) {
  const { img_98722, widgetMSizeBigLinesChartWithDynamicProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="temp-1 screen">
        <div className="overlap-group-5">
          <div className="rectangle-2"></div>
          <img className="img9872-2" src={img_98722} />
        </div>
        <WidgetMSizeBigLinesChartWithDynamic {...widgetMSizeBigLinesChartWithDynamicProps} />
      </div>
    </div>
  );
}

export default Temp1;
