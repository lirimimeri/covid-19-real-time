import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kosovo from "../photos/kosovo.png";
import $ from "jquery";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="h">
          <img src={Kosovo} alt="Kosovo flag" className="logoks" /> <br />
          <ul className="nav justify-content-center" >
            <li className="nav-item" >
              <a
                className="nav-link active" id="Home"
                href="/#" 
                style={{ fontSize: "18px" }}
              >
                <i className="fas fa-home"></i> Ballina
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#" style={{ fontSize: "18px" }}>
                <i className="far fa-chart-bar"></i> Statistika
              </a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" id="Advice"  href="/#" style={{ fontSize: "18px" }}>
                <i className="fas fa-comment-medical"></i> Këshilla
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}


$("#Home").click(function() {
  $('html, body').animate({
      scrollTop: $("#ballina").offset().top
  }, 2000);
});

$("#Advice").click(function() {
  $('html, body').animate({
      scrollTop: $("#keshillat").offset().top
  }, 2000);
});

export default Header;
