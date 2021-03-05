import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./Jumbotron.css";
import Modal from "react-responsive-modal";
import "./Login.css";
import "./SignUp.css";
// import "../public/Images/play.png";

function Jumbotron() {
  return (
    <div className="top">
      <div class="row">

        <div class="col col-lg-7 top-text col-sm-12 col1">
          <div class="textTop">
            <div className="heading">
              <i class="fas fa-book"></i>
              <span id="text1">ELECTURA</span>

              {/* <button class="loginBtn" type="checkbox" id="show">
                    {" "}
                    Login{" "} */}
              {/* </button> */}
              <input type="checkbox" id="show" />
              <label for="show" class="loginBtn">
                Login
              </label>

              {/* login code */}

              <div class="container">
                
                <label
                  for="show"
                  class="close-btn fas fa-times"
                  title="close"
                ></label>
                
                <div class="text">Login Form</div>
                <form action="#">
                  <div class="data">
                    <label>Email or Phone</label>
                    <input type="text" required />
                  </div>
                  <div class="data">
                    <label>Password</label>
                    <input type="password" required />
                  </div>
                  
                  <div class="forgot-pass">
                    <a href="#">Forgot Password?</a>
                  </div>
                  <br />
                  <div class="">
                    
                    <button type="submit" class="lsButton">Login</button>
                  </div>
                  <div class="signup-link">
                    Not a member? <a href="#">Signup now</a>
                  </div>
                </form>
              </div>

              {/* login code finished */}
            
              {/* <button class="signBtn"> Sign up</button>
            </div> */}

            <input type="checkbox" id="show2" />
              <label for="show2" class="signBtn">
                SignUp
              </label>

            {/* singup code */}
            
            <div class="container2">
                <label
                  for="show2"
                  class="close-btn2 fas fa-times"
                  title="close"
                ></label>
                <div class="text2">SignUp Form</div>
                <form action="#">
                <div class="data2">
                    <label>Name</label>
                    <input type="text" required />
                  </div>
                  <div class="data2">
                    <label>Email or Phone</label>
                    <input type="text" required />
                  </div>
                  <div class="data2">
                    <label>Password</label>
                    <input type="password" required />
                  </div>
                  <br />
                  <div class="btn2">
                    
                    <button type="submit" class="lsButton">Sign Up</button>
                  </div>
                  <div class="signup-link2">
                    Not a member? <a href="#">Signup now</a>
                  </div>
                </form>
              </div>
            {/* signup finsi */}

            <br />
            <span id="text2">
              Transforming Education
              <br />

            </span>
            <div className="text4">We at Electura strive to transform the age old and rote way of imparting education <br /> to young minds thorugh 
            ambitious, ethical, and top-quality academic coaches <br />who have proven their mettle by cracking some of the toughest exams on the Earth.
            </div>
            <div className="text3">
              Download The App Now.
            </div>
          </div>
          
        </div>
        <img class="playStore" src = "/Images/play.png" ></img>
        </div>
        <div class="col col-lg-5 col-sm-12 col2">
          <img
            class="img-top"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="top-image"
          />
        </div>
      </div>
    </div>
    
  );
}
export default Jumbotron;
