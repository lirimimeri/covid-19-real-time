import React, { Component } from "react";
import './styles.css'

function Footer() {
  return (
    <div className="footer">
      Feedback<br />
      <br />
      
      <div className="row" style={{backgroundColor: " rgb(24, 43, 43)", height: "80px"}}>
        
        <div class="col" >
          <i class="fas fa-envelope pr-1" 
          style={{color: "rgb(69, 88, 88)", fontSize: "2em"}}/> <br />
          lirimimeri17@gmail.com <br />
        </div>

        <div class="col">
          <i class="fab fa-github pr-1" 
          style={{color: "rgb(69, 88, 88)", fontSize: "2em"}}/> <br />
          lirimimeri <br />          
        </div>
      </div>
      <div class="footer-copyright text-center py-3" style={{backgroundColor: "rgb(14, 26, 26)"}}>
        © 2020 Copyrights Reserved
      </div>
    </div>
  );
}

export default Footer;
