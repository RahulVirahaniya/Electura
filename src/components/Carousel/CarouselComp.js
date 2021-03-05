import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item/Item";
import "./CarouselComp.css";

const breakPoints= [
    {width : 1 , itemsToShow : 1},
    
]

function CarouselComp(){
    return (
      <div className="carousel">
        <h2 className="carouselHeading">Our Services</h2>
        <br/>
        <div className="carouselText">Here is a list of few services that we provide to make teaching easy.<br/> Explore!!!</div>
        <Carousel breakPoints = {breakPoints} >
        <Item text="Live Classes" fa="fas fa-laptop-code itemShape" desc="The application provides smooth interaction through Live Classes."  />
         <Item text="Secure Envionment" fa="fas fa-atom itemShape" desc="A secure and bug free environment for better and safe interaction." />
         <Item text="Attendence Management" fa="fas fa-user-graduate itemShape" desc="An easy Attendence Management System to operate."  />
         <Item text="Store Achievements" fa="fas fa-award itemShape" desc="To store and update the performance of the students."  />
         <Item text="Interactive Environment" fa="fas fa-shapes itemShape" desc="A live interactive environment"  />
         
         
      </Carousel>
      </div>
    )
}

export default CarouselComp;