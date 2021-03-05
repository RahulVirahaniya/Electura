import React from "react";
import "./Column.css";

function Column() {
  return (
    <div className="columnContainer">
    <h2 className="colHeading">Our Goals !!</h2>
        <div className="row">
      <div className="col col-lg-4">
        <i class="fas fa-school colLogo"></i> <br />
        <div className="columnItems"> Provide a platform to teachers to take their teaching to next level </div>
        
      </div>
      <div className="col col-lg-4 ">
        <i class="far fa-file-code colLogo"></i> <br />
        <div className="columnItems"> Providing a platform which anyone can access anytime </div>
      </div>
      <div className="col col-lg-4 ">
        <i class="far fa-check-circle colLogo"></i>
        <br />
        <div className="columnItems"> Bringing a Revolutionary way in teaching </div>
      </div>
    </div>
    </div>
  );
}

export default Column;
