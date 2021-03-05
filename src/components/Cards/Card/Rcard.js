import React from "react";
import "./Rcard.css";

function Rcard(props) {
  return (
      
      <div class="col col-lg-12 cardCol2">
      <i className={props.faa}></i>
     
      <div className="cardText2">{props.text}</div>
      <div className="cardDesc2">{props.desc}</div>  
      <span className="cardNumber2">{props.number}</span>
      </div>
    
  );
}

export default Rcard;
