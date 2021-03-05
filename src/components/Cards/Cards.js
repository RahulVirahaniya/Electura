import React from "react";
import "./Cards.css";
import Card from "./Card/Card";
import Rcard from "./Card/Rcard";

function Cards() {
  return (
    <div className = "middleContainer">
      <h2 className="cardHeading">Setup Your Class <br />With Just a Few Clicks</h2>
      <div class="middle">
        <Card number = "1" text="Create A Batch" desc = "Here, you can easily create a batch"  faa ="fas fa-users cardFab" />
        <Rcard number = "2" text="Invite Students"  desc ="Here, you can easily invite students"  faa="fas fa-user-graduate cardFab2"/>
        <Card number = "3" text="Enjoy Teaching"  desc ="Here you can enjoy Teaching" faa="fas fa-award cardFab " />
    </div>
    </div>
  );
}

export default Cards;
