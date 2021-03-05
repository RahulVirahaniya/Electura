import React from "react";
import "./Card.css";

function Card(props) {
  return (
      
      <div class="col col-lg-12 cardCol">
      <span className="cardNumber">{props.number}</span>
      <div className="cardText">{props.text}</div>
      <div className="cardDesc">{props.desc}</div>  
      <i className={props.faa}></i>
      </div>
    
  );
}

export default Card;    
